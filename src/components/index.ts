import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { DetailedHTMLProps, FormEvent, ReactElement } from "react";

// Interface para os itens de "Sobre" (About)
export interface GRAboutItem {
	title?: string;
	body: string;
	align: "left" | "right" | "client"; // Especifica o alinhamento do texto/imagem
	image?: string | StaticImport; // Suporta imagem como string ou import estático
}

// Props para o componente GRAbout
export interface GRAboutProps {
	itens: GRAboutItem[]; // Array de itens de "Sobre"
}

// Props para uma seção administrativa
export interface GRAdminSectionProps {
	title: string; // Título da seção
	formFields: ReactElement; // Campos do formulário
	onSubmit: (e: FormEvent<HTMLFormElement>) => void; // Função de submissão do formulário
	goBack?: () => void; // Função opcional para retornar (back)
}

// Props para o componente GRCard
export interface GRCardProps {
	title: string; // Título do card
	description: string; // Descrição do card
	tags: string[]; // Array de tags relacionadas
	image?: string; // Imagem opcional para o card
}

// Interface para links no rodapé
export interface GRFooterLink {
	href: string; // URL do link
	label: string; // Texto do link
}

// Interface para links sociais no rodapé
export interface GRFooterSocialLink {
	platform: "Facebook" | "Twitter" | "Instagram" | "LinkedIn"; // Plataformas suportadas
	url: string; // URL da plataforma social
}

// Interface para contato no rodapé
export interface GRFooterContact {
	phone: string; // Telefone de contato
	email: string; // Email de contato
}

// Props para o componente GRFooter
export interface GRFooterProps {
	text: string; // Texto principal do rodapé
	links: GRFooterLink[]; // Links de navegação no rodapé
	contact: GRFooterContact; // Contato do rodapé
	socialLinks: GRFooterSocialLink[]; // Links sociais
	academiaName?: JSX.Element | string; // Nome da academia ou empresa (pode ser JSX)
}

// Props para o componente de Serviços (Services)
export interface GRServicesProps {
	itens: GRCardProps[]; // Lista de cards de serviços
}

// Interface genérica para elementos HTML
export interface GRElementProps<HtmlType extends HTMLElement>
	extends DetailedHTMLProps<any, HtmlType> {}

// Props para o formulário, estendendo os atributos de formulário HTML
export interface GRFormProps extends GRElementProps<HTMLFormElement> {
	className?: undefined; // Opção para className (pode ser removida se não for necessária)
}

// Props para botões (Button), estendendo os atributos do botão HTML
export interface GRButtonProps extends GRElementProps<HTMLButtonElement> {}

// Props para o componente Hero (destaque)
export interface GRHeroProps {
	title: string | JSX.Element; // Título como string ou JSX
	body: string; // Corpo do texto do componente Hero
}

// Props para Input, estendendo os atributos de input HTML
export interface GRInputProps extends GRElementProps<HTMLInputElement> {
	label: string; // Label do campo de input
	id: string; // ID do campo de input
}

// Props para TextArea, estendendo os atributos de textarea HTML
export interface GRTextAreaProps extends GRElementProps<HTMLTextAreaElement> {
	label: string; // Label do campo de textarea
	id: string; // ID do campo de textarea
}

// Interface para itens de navegação (Navbar)
export interface GRNavbarItem {
	label: string; // Texto do item de navegação
	href?: string; // Link opcional do item de navegação
	align: "center" | "right"; // Alinhamento do item na navbar
}

// Props para o componente de navegação (Navbar)
export interface GRNavbarProps {
	title: React.ReactNode; // Título da navbar (pode ser JSX)
	itens: GRNavbarItem[]; // Lista de itens de navegação
}

// Interface para a empresa/academia (GREmpresa)
export interface GREmpresaType {
	nome: string; // Nome da empresa ou academia
	navbarItens: GRNavbarItem[]; // Itens de navegação
	heroText: string; // Texto do Hero (destaque)
	textos: GRAboutItem[]; // Textos da seção "Sobre"
	services: GRCardProps[]; // Serviços oferecidos
	footer: GRFooterProps; // Informações do rodapé

	// Métodos para atualizar as informações da empresa/academia
	setNome: (value: string) => void;
	setNavbarItens: (value: GRNavbarItem[]) => void;
	setHeroText: (value: string) => void;
	setTextos: (value: GRAboutItem[]) => void;
	setServices: (value: GRCardProps[]) => void;
	setFooter: (value: GRFooterProps) => void;
}

// Export from GRAbout
export { default as GRAbout } from "./GRAbout/GRAbout";

// Export from GRButton
export { default as GRButton } from "./GRButton/GRButton";

// Export from GRCard
export { default as GRCard } from "./GRCard/GRCard";

// Export from GRFooter
export { default as GRFooter } from "./GRFooter/GRFooter";

// Export from GRForm
export { default as GRForm } from "./GRForm/GRForm";

// Export from GRHero
export { default as GRHero } from "./GRHero/GRHero";

// Export from GRInput
export { default as GRInput } from "./GRInput/GRInput";

// Export from GRTextArea
export { default as GRTextArea } from "./GRInput/GRTextArea";

// Export from GRNavbar
export { default as GRNavbar } from "./GRNavbar/GRNavbar";

// Export from GRServices
export { default as GRServices } from "./GRServices/GRServices";

// Export from Providers
export { default as GREmpresa } from "./Providers/GREmpresa";

export { default as GRAdminSection } from "./GRAdmin/GRAdminSection";
export { default as GRConfig } from "./GRConfig/GRConfig";
