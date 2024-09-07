import GRCard, { GRCardProps } from "../GRCard/GRCard";

export interface GRServicesProps {
  itens: GRCardProps[];
}

export default function GRServices({itens}:GRServicesProps) {
  return (
    <section id="services" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itens.map((item,i) => (
            <GRCard
              key={i}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
