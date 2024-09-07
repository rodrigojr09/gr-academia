import { GRProps } from "@/utils/type";

export default function Navbar({ empresa }: GRProps) {
   return <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-xl font-bold">
                {empresa.nome}
            </a>
            <ul className="flex space-x-6">
                <li>
                    <a href="#hero" className="hover:underline">
                        Início
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:underline">
                        Sobre Nós
                    </a>
                </li>
                <li>
                    <a href="#services" className="hover:underline">
                        Serviços
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">
                        Contato
                    </a>
                </li>
            </ul>
        </div>
    </nav>
}
