import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FormEvent, useState } from "react";
import GRButton from "../components/GRButton/GRButton";
import GRInput from "../components/GRInput/GRInput";
import GRForm from "@/components/GRForm/GRForm";
import { FaCogs } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import GREmpresa from "@/components/Providers/GREmpresa";

export default function App({ Component, pageProps }: AppProps) {
  const empresa = GREmpresa();
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  //const [nomeEmpresa, setNomeEmpresa] = useState("");

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Adicione a lógica de salvamento do formulário aqui
  }

  if (empresa)
    return (
      <div className="flex relative">
        <Component {...pageProps} empresa={empresa} />
        <div className="fixed z-10 right-0 top-1/3 flex items-center">
          <button
            className="py-2 px-4 rounded-l-full bg-cyan-500 flex items-center text-white"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <FaCogs />
          </button>
        </div>
        <Transition
          show={settingsOpen}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <button
              className="text-white right-0 top-0 text-4xl fixed"
              onClick={() => setSettingsOpen(false)}
            >
              <CgClose />
            </button>
            <div className="bg-white shadow-lg rounded-md p-6 border border-gray-300 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Configurações
              </h3>
              <GRForm onSubmit={handleFormSubmit}>
                <GRInput
                  label="Nome da Academia"
                  type="text"
                  id="academyName"
                  value={empresa.nome}
                  onChange={(e) => empresa.setNome(e.target.value)}
                  placeholder="Digite o nome da academia"
                  required
                />
                <GRButton>Salvar</GRButton>
              </GRForm>
            </div>
          </div>
        </Transition>
      </div>
    );
  return <div></div>;
}
