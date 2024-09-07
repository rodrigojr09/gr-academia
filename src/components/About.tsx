import { GRProps } from "@/utils/type";

export default function About({ empresa }:GRProps){
  return <section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
      <p className="text-lg text-gray-700">
        Na {empresa.nome}, oferecemos uma variedade de serviços e treinos
        personalizados para atender às suas necessidades de fitness. Nossa
        missão é ajudar você a atingir seus objetivos de saúde e bem-estar com o
        melhor suporte e equipamentos disponíveis.
      </p>
    </div>
  </section>
}