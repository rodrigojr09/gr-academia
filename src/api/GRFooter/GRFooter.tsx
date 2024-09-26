import { GRFooterProps } from "..";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function GRFooter({
	text,
	links,
	contact,
	socialLinks,
	academiaName,
}: GRFooterProps) {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row md:space-x-4 mb-8 ">
					<div className="w-full md:w-1/3 mb-6 md:mb-0 flex-1">
						<h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
						<p>{text}</p>
					</div>
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h3 className="text-xl font-bold mb-4">
							Links Rápidos
						</h3>
						<ul>
							{links.map((link, index) => (
								<li key={index}>
									<Link href={link.href}>
										<span className="hover:underline">
											{link.label}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="w-full md:w-1/3">
						<h3 className="text-xl font-bold mb-4">Contato</h3>
						<p>Telefone: {contact.phone}</p>
						<p>Email: {contact.email}</p>
						<div className="flex space-x-4 mt-4">
							{socialLinks.map((social, index) => (
								<Link
									key={index}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.platform}
								>
									{social.platform === "Facebook" && (
										<FaFacebook className="text-2xl hover:text-gray-400" />
									)}
									{social.platform === "Twitter" && (
										<FaTwitter className="text-2xl hover:text-gray-400" />
									)}
									{social.platform === "Instagram" && (
										<FaInstagram className="text-2xl hover:text-gray-400" />
									)}
									{social.platform === "LinkedIn" && (
										<FaLinkedin className="text-2xl hover:text-gray-400" />
									)}
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className="text-center mt-8 border-t border-gray-700 pt-4">
					<p>
						© {new Date().getFullYear()} {academiaName}. Todos os
						direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
