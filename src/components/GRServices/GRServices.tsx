import { GRServicesProps, GRCard } from "..";

export default function GRServices({ itens }: GRServicesProps) {
	return (
		<section id="services" className="py-16 bg-gray-200">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-12 text-gray-800">
					Nossos Serviços
				</h2>
				{/* Container for scrolling on smaller screens */}
				<div className="flex overflow-x-auto space-x-4 px-4 py-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-x-0 md:gap-8">
					{itens.map((item, i) => (
						<div key={i} className="w-1/2 h-max shrink-0 md:w-auto">
							<GRCard {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
