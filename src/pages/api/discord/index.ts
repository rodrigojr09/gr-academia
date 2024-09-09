import { NextApiRequest, NextApiResponse } from "next";
import { retryWithBackoff } from "@/utils/retryWithBackoff";

const REQUEST_LIMIT = 5; // Número máximo de requisições permitidas
const TIME_WINDOW = 60 * 1000; // Janela de tempo para limitar requisições (1 minuto)
const requestTimestamps: Map<string, number[]> = new Map(); // Armazena timestamps de requisições por IP

// Função auxiliar para verificar se o IP excedeu o limite de requisições
function isRateLimited(ip: string): boolean {
  const timestamps = requestTimestamps.get(ip) || [];
  const now = Date.now();

  // Remove timestamps antigos fora da janela de tempo
  requestTimestamps.set(
    ip,
    timestamps.filter((ts) => now - ts < TIME_WINDOW)
  );

  // Verifica se o número de requisições dentro da janela de tempo excede o limite
  return requestTimestamps.get(ip)!.length >= REQUEST_LIMIT;
}

// Função auxiliar para adicionar um timestamp de requisição
function addRequestTimestamp(ip: string): void {
  const timestamps = requestTimestamps.get(ip) || [];
  timestamps.push(Date.now());
  requestTimestamps.set(ip, timestamps);
}

// Middleware para aplicar o controle de taxa na API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (clientIp && isRateLimited(clientIp.toString())) {
    return res
      .status(429)
      .json({ message: "Rate limit atingido, tente novamente mais tarde." });
  }

  if (req.method === "POST") {
    const { message, channelId } = req.body;

    // Validação
    if (!message || !channelId) {
      return res
        .status(400)
        .json({ message: "Mensagem ou canal não fornecido." });
    }

    try {
      // Adiciona timestamp de requisição
      if (clientIp) addRequestTimestamp(clientIp.toString());

      // Função que faz a requisição para o Discord
      const sendMessage = async () =>
        fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
          },
          body: JSON.stringify({ content: message }),
        });

      // Usa retryWithBackoff para tentar a requisição com backoff exponencial
      const discordResponse = await retryWithBackoff(sendMessage, 5, 1000);

      // Lógica para tratar a resposta do Discord
      if (discordResponse.ok) {
        res.status(200).json({ message: "Mensagem enviada com sucesso!" });
      } else {
        const errorData = await discordResponse.json();
        if (discordResponse.status === 429) {
          return res.status(429).json({
            message:
              "Rate limit do Discord atingido, por favor, tente novamente mais tarde.",
          });
        }
        res
          .status(500)
          .json({ message: errorData.message || "Erro ao enviar mensagem." });
      }
    } catch (error) {
      console.error("Erro ao comunicar com a API do Discord:", error);
      res
        .status(500)
        .json({ message: "Erro ao comunicar com a API do Discord." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
