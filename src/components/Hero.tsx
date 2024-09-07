import { GRProps } from "@/utils/type";

export default function Hero({ empresa }: GRProps) {
    return <section
        id="hero"
        className="h-screen bg-cover bg-center relative text-white"
        style={{
            backgroundImage: "url(/academia.jpg)",
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{empresa.nome}</h1>
                <p className="text-lg md:text-2xl">
                    Transforme seu corpo e mente com nossos treinos e serviços
                    personalizados.
                </p>
            </div>
        </div>
    </section>
}

