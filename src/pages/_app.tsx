import "@/styles/globals.css";
import 'grsistemas-ui/dist/GRStyles.css';
import type { AppProps } from "next/app";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaCogs } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { GREmpresa, GRForm, GRInput, GRTextArea, GRButton } from "grsistemas-ui";

export default function App({ Component, pageProps, router }: AppProps) {
  const empresa = GREmpresa();
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [serviceOpen, setServiceOpen] = useState<number>(-1);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Adicione a lógica de salvamento do formulário aqui
  }

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  if (empresa && !router.asPath.startsWith("/admin")) {
    return (
      <div className="relative">
        <Component {...pageProps} empresa={empresa} />
        <div className="fixed z-20 right-0 top-1/3 flex items-center">
          <button
            className="p-2 text-2xl pr-4 rounded-l-full bg-cyan-500 flex items-center text-white"
            onClick={() => setSettingsOpen(!settingsOpen)}
          ><FaCogs /></button>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <button
              className="absolute text-white right-4 top-4 text-3xl"
              onClick={() => setSettingsOpen(false)}
            >
              <CgClose />
            </button>
            <GRForm onSubmit={handleFormSubmit}>
              <h3 className="text-xl font-bold mb-4 text-center">
                Configurações
              </h3>
              <GRInput
                label="Nome da Academia"
                type="text"
                id="academyName"
                value={empresa.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  empresa.setNome(e.target.value)
                }
                placeholder="Digite o nome da academia"
                required
              />
              <GRTextArea
                label="Frase para Slogan"
                id="sloganText"
                value={empresa.heroText}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  empresa.setHeroText(e.target.value)
                }
                placeholder="Digite o slogan da academia"
                required
              />
              <div className="flex-col flex text-start w-full">
                <h1>Serviços:</h1>
                {empresa.services.map((service, i) => (
                  <div key={i} className="relative">
                    <button
                      className="text-start flex items-center space-x-1"
                      onClick={() => setServiceOpen(serviceOpen === i ? -1 : i)}
                      aria-expanded={serviceOpen === i}
                      aria-controls={`service-${i}`}
                    >
                      <span>
                        {i + 1}. {service.title}
                      </span>
                      <IoIosArrowDown
                        className={`duration-100 ${
                          serviceOpen === i ? "" : "-rotate-90"
                        }`}
                      />
                    </button>
                    <Transition
                      show={serviceOpen === i}
                      enter="transition-max-height duration-300 ease-out"
                      enterFrom="max-h-0 opacity-0"
                      enterTo="max-h-40 opacity-100"
                      leave="transition-max-height duration-300 ease-in"
                      leaveFrom="max-h-40 opacity-100"
                      leaveTo="max-h-0 opacity-0"
                    >
                      <div
                        id={`service-${i}`}
                        className="overflow-hidden p-2 border rounded-xl"
                      >
                        <GRInput
                          label="Título do Serviço"
                          id="service-title"
                          value={service.title}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            empresa.setServices(
                              empresa.services.map((s, i2) => {
                                if (i === i2) {
                                  return {
                                    ...s,
                                    title: e.target.value,
                                  };
                                }
                                return s;
                              })
                            )
                          }
                        />
                        <GRTextArea
                          id="service-description"
                          label="Descrição do Serviço"
                          value={service.description}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            empresa.setServices(
                              empresa.services.map((s, i2) => {
                                if (i === i2) {
                                  return {
                                    ...s,
                                    description: e.target.value,
                                  };
                                }
                                return s;
                              })
                            )
                          }
                        />
                      </div>
                    </Transition>
                  </div>
                ))}
              </div>
              <GRButton>Salvar</GRButton>
            </GRForm>
          </div>
        </Transition>
      </div>
    );
  } else if (router.asPath.startsWith("/admin")) {
    return <Component />;
  }
  return <div></div>;
}
