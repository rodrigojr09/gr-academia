// /pages/api/discord/channels.ts
import {
  ChannelType,
  RESTAPIGuildChannelResolvable,
} from "discord-api-types/v10";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;

  // Verifica se as variáveis de ambiente estão definidas
  if (!botToken || !guildId) {
    return res
      .status(500)
      .json({ status: "Configuração do bot não encontrada" });
  }

  try {
    const response = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}/channels`,
      {
        headers: {
          Authorization: `Bot ${botToken}`,
        },
      }
    );

    if (!response.ok) {
      // Loga detalhes da resposta para ajudar na depuração
      const errorData = await response.json();
      console.error("Erro ao buscar canais:", errorData);
      return res.status(500).json({ status: "Erro ao buscar canais" });
    }

    const channels: RESTAPIGuildChannelResolvable[] = await response.json();

    // Filtrar canais de texto
    const textChannels = channels.filter(
      (channel) => channel.type === ChannelType.GuildText
    );

    return res
      .status(200)
      .json({ channels: textChannels, status: "Bot online" });
  } catch (error) {
    // Loga o erro para ajudar na depuração
    console.error("Erro ao conectar com o bot:", error);
    return res.status(500).json({ status: "Erro ao conectar com o bot" });
  }
}
