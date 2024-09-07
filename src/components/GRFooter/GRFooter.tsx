import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

interface GRFooterProps {
  aboutText: string;
  links: { href: string; label: string }[];
  contact: { phone: string; email: string };
  socialLinks: {
    platform: "Facebook" | "Twitter" | "Instagram" | "LinkedIn";
    url: string;
  }[];
  footerText: string;
}

export default function GRFooter({
  aboutText,
  links,
  contact,
  socialLinks,
  footerText,
}: GRFooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p>{aboutText}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="hover:underline">{link.label}</span>
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
          <p>{footerText}</p>
        </div>
      </div>
    </footer>
  );
}
