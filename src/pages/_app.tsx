import "@/styles/globals.css";
import GREmpresa from "@/utils/gr-api/GREmpresa";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GRButton from "../components/GRButton";
import GRInput from "../components/GRInput";
import GRForm from "@/components/GRForm";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [empresa, setEmpresa] = useState<GREmpresa | undefined>();
  const [nomeEmpresa, setNomeEmpresa] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const queryEmpresa = router.query.empresa;
    if (queryEmpresa && typeof queryEmpresa === "string") {
      setEmpresa(new GREmpresa(queryEmpresa));
    }
    setLoaded(true);
  }, [router.query]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nomeEmpresa) {
      setEmpresa(new GREmpresa(nomeEmpresa));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeEmpresa(e.target.value);
  };

  if (!loaded) {
    return <div>Carregando...</div>;
  } else if (loaded && !empresa) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <GRForm onSubmit={handleFormSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Nome da Academia
          </h2>
          <div className="mb-4">
            <label
              htmlFor="academyName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Nome da Academia
            </label>
            <GRInput
              type="text"
              id="academyName"
              value={nomeEmpresa}
              onChange={handleInputChange}
              placeholder="Digite o nome da academia"
              required
            />
          </div>
          <GRButton>Avançar</GRButton>
        </GRForm>
      </div>
    );
  } else if (loaded && empresa) {
    return <Component {...pageProps} empresa={empresa} />;
  }
}
