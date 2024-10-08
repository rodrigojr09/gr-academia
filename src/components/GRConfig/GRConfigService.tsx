import { Transition } from "@headlessui/react";
import { ChangeEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GRCardProps, GREmpresaType, GRInput, GRTextArea } from "..";

export default function GRConfigService({
	service,
	empresa,
	i: key,
	serviceOpen,
	setServiceOpen,
}: {
	empresa: GREmpresaType;
	setServiceOpen: (value: number) => void;
	serviceOpen: number;
	i: number;
	service: GRCardProps;
}) {
	return (
		<div key={key} className="relative">
			<button
				className="text-start flex items-center space-x-1"
				onClick={() => setServiceOpen(serviceOpen === key ? -1 : key)}
				aria-expanded={serviceOpen === key}
				aria-controls={`service-${key}`}
			>
				<span>
					{key + 1}. {service.title}
				</span>
				<IoIosArrowDown
					className={`duration-100 ${
						serviceOpen === key ? "" : "-rotate-90"
					}`}
				/>
			</button>
			<Transition
				show={serviceOpen === key}
				enter="transition-max-height duration-300 ease-out"
				enterFrom="max-h-0 opacity-0"
				enterTo="max-h-40 opacity-100"
				leave="transition-max-height duration-300 ease-in"
				leaveFrom="max-h-40 opacity-100"
				leaveTo="max-h-0 opacity-0"
			>
				<div
					id={`service-${key}`}
					className="overflow-hidden p-2 border rounded-xl"
				>
					<GRInput
						label="Título do Serviço"
						id="service-title"
						value={service.title}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							empresa.setServices(
								empresa.services.map((s, i2) => {
									if (key === i2) {
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
									if (key === i2) {
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
	);
}
