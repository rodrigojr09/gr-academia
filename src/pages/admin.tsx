import { FormEvent, useState } from "react";
import GRButton from "@/components/GRButton/GRButton";
import GRAdminSection from "@/components/GRAdmin/GRAdminSection";
import GRTextArea from "@/components/GRInput/GRTextArea";
import { RESTAPIGuildChannelResolvable } from "discord-api-types/v10";

enum Section {
  BotControl,
  UserManagement,
  ServerSettings,
}

export default function GRAdmin() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [channels, setChannels] = useState<RESTAPIGuildChannelResolvable[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<string>("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState<{
    type: "success" | "danger";
    content: string;
  } | null>(null);

  const fetchChannels = async () => {
    try {
      const res = await fetch("/api/discord/channels");
      if (!res.ok) throw new Error("Erro ao obter canais.");
      const data = await res.json();
      setChannels(data.channels || []);
    } catch (error) {
      console.error("Erro ao obter canais.", error);
      setNotification({ type: "danger", content: "Erro ao obter canais." });
    }
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (message.length < 5)
        throw new Error("Digite pelo menos 5 caracteres.");
      const res = await fetch("/api/discord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          channelId: selectedChannel,
        }),
      });
      if (!res.ok) throw new Error("Erro ao enviar mensagem.");
      setNotification({
        type: "success",
        content: "Mensagem enviada com sucesso!",
      });
    } catch (error) {
      setNotification({ type: "danger", content: (error as Error).message });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.BotControl:
        return (
          <GRAdminSection
            title="Controle do Bot"
            formFields={
              <>
                <label htmlFor="channel" className="block mb-2 font-medium">
                  Selecione o Canal:
                </label>
                <select
                  id="channel"
                  value={selectedChannel}
                  onChange={(e) => setSelectedChannel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Escolha um canal</option>
                  {channels.map((channel) => (
                    <option key={channel.id} value={channel.id}>
                      {channel.name}
                    </option>
                  ))}
                </select>
                <GRTextArea
                  label="Mensagem"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                />
              </>
            }
            onSubmit={sendMessage}
            goBack={() => setActiveSection(null)}
          />
        );
      case Section.UserManagement:
        return (
          <GRAdminSection
            title="Gerenciamento de Usuários"
            formFields={
              <div>
                {/* Adicione os campos de formulário específicos aqui */}
              </div>
            }
            onSubmit={(e) => {
              e.preventDefault();
              // Lógica específica para gerenciamento de usuários
            }}
            goBack={() => setActiveSection(null)}
          />
        );
      case Section.ServerSettings:
        return (
          <GRAdminSection
            title="Configurações do Servidor"
            formFields={
              <div>
                {/* Adicione os campos de formulário específicos aqui */}
              </div>
            }
            onSubmit={(e) => {
              e.preventDefault();
              // Lógica específica para configurações do servidor
            }}
            goBack={() => setActiveSection(null)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 text-white w-screen h-screen flex">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Admin - Menu Principal
          </h2>
          <div className="flex flex-col gap-4">
            <GRButton
              onClick={() => {
                setActiveSection(Section.BotControl);
                fetchChannels();
              }}
            >
              Controle do Bot
            </GRButton>
            <GRButton onClick={() => setActiveSection(Section.UserManagement)}>
              Gerenciamento de Usuários
            </GRButton>
            <GRButton onClick={() => setActiveSection(Section.ServerSettings)}>
              Configurações do Servidor
            </GRButton>
          </div>
        </div>
        <GRButton
          onClick={() => {
            setActiveSection(null);
            setNotification(null);
          }}
          className="mt-auto"
        >
          Voltar ao Menu Principal
        </GRButton>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        {renderSection()}
        {notification && (
          <p
            className={
              "mt-4 text-center " +
              (notification.type === "danger"
                ? "text-red-500"
                : "text-green-500")
            }
          >
            {notification.content}
          </p>
        )}
      </div>
    </div>
  );
}
