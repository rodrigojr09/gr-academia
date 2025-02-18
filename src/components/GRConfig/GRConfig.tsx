import {
	GRButton,
	GREmpresaType,
	GRForm,
	GRInput,
	GRTextArea,
} from "@/components";
import { Transition } from "@headlessui/react";
import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { CgClose } from "react-icons/cg";
import { FaCogs } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import GRConfigService from "./GRConfigService";

export default function GRConfig({ empresa }: { empresa: GREmpresaType }) {
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
	return (
		<>
			<div className="fixed z-20 right-0 top-1/3 flex items-center">
				<button
					className="p-2 text-2xl pr-4 rounded-l-full bg-cyan-500 flex items-center text-white"
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
								<GRConfigService
									service={service}
									i={i}
									key={i}
									empresa={empresa}
									serviceOpen={serviceOpen}
									setServiceOpen={setServiceOpen}
								/>
							))}
						</div>
						<GRButton
							className={"mt-5"}
							onClick={() => setSettingsOpen(false)}
						>
							Fechar
						</GRButton>
					</GRForm>
				</div>
			</Transition>
		</>
	);
}
