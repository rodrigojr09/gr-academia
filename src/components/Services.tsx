import { GRProps } from "@/utils/type";

export default function Services({ empresa }: GRProps) {
    empresa;
    return <section id="services" className="py-16">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Treino Personalizado</h3>
                    <p className="text-gray-700">
                        Receba um plano de treino adaptado às suas necessidades e objetivos.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Aulas em Grupo</h3>
                    <p className="text-gray-700">
                        Participe de aulas dinâmicas com acompanhamento de instrutores
                        qualificados.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">
                        Consultoria Nutricional
                    </h3>
                    <p className="text-gray-700">
                        Obtenha orientações nutricionais para complementar seu regime de
                        treino.
                    </p>
                </div>
            </div>
        </div>
    </section>
}