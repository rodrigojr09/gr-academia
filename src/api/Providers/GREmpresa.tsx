import {
	GRNavbarItem,
	GRAboutItem,
	GRCardProps,
	GRFooterProps,
	GREmpresaType,
} from "..";
import { useState } from "react";

export default function GREmpresa({}): GREmpresaType {
	const [nome, setNome] = useState<string>("Academia Fit");
	const [navbarItens, setNavbarItens] = useState<GRNavbarItem[]>([
		{ label: "Inicio", href: "/", align: "center" },
		{ label: "Serviços", href: "/#services", align: "center" },
		{ label: "Entrar", href: "/login", align: "right" },
	]);
	const [heroText, setHeroText] = useState<string>(
		"Transforme sua saúde e bem-estar com treinos personalizados e uma comunidade motivadora."
	);
	const [textos, setTextos] = useState<GRAboutItem[]>([
		{
			body: "Nossa academia é dedicada a ajudar nossos alunos a atingirem suas metas de saúde e bem-estar, oferecendo um ambiente acolhedor e treinos personalizados.",
			align: "client",
		},
		{
			title: "Missão",
			body: "Nossa missão é proporcionar uma experiência fitness completa, unindo treinos de alta qualidade, tecnologia e uma comunidade engajada.",
			align: "right",
		},
		{
			body: "Com equipamentos de ponta e profissionais capacitados, ajudamos você a transformar sua rotina com saúde e qualidade de vida.",
			align: "left",
		},
		{
			title: "Visão",
			body: "Ser referência em saúde e bem-estar, promovendo resultados duradouros para nossos alunos.",
			align: "right",
		},
	]);
	const [services, setServices] = useState<GRCardProps[]>([
		{
			title: "Treino Personalizado",
			description:
				"Receba um plano de treino adaptado às suas necessidades e objetivos.",
			tags: ["bem-estar", "relaxamento", "massagem"],
		},
		{
			title: "Aulas em Grupo",
			description:
				"Participe de aulas dinâmicas e motivadoras em grupo, como spinning, yoga e mais.",
			tags: ["bem-estar", "relaxamento", "massagem"],
		},
		{
			title: "Avaliação Física",
			description:
				"Realize avaliações físicas regulares para monitorar seu progresso e ajustar seu plano.",
			tags: ["bem-estar", "relaxamento", "massagem"],
		},
		{
			title: "Consultoria Nutricional",
			description:
				"Receba orientações nutricionais personalizadas para maximizar seus resultados.",
			tags: ["bem-estar", "relaxamento", "massagem"],
		},
		{
			title: "Acompanhamento Online",
			description:
				"Acompanhe seu progresso e tenha suporte através de nossa plataforma online.",
			tags: ["bem-estar", "relaxamento", "massagem"],
		},
		{
			title: "Espaço de Bem-Estar",
			description:
				"Relaxe em nosso espaço de bem-estar com serviços como massoterapia e sauna.",
			tags: ["bem-estar", "relaxamento", "massagem"],
		},
	]);
	const [footer, setFooter] = useState<GRFooterProps>({
		text: "Na Academia Fitness, oferecemos um ambiente acolhedor e profissional para ajudar você a alcançar suas metas de saúde e bem-estar. Junte-se a nós e transforme sua vida.",
		links: [
			{ href: "/", label: "Início" },
			{ href: "/services", label: "Serviços" },
			{ href: "/about", label: "Sobre" },
			{ href: "/contact", label: "Contato" },
		],
		socialLinks: [
			{ platform: "Facebook", url: "https://facebook.com" },
			{ platform: "Twitter", url: "https://twitter.com" },
			{ platform: "Instagram", url: "https://instagram.com" },
			{ platform: "LinkedIn", url: "https://linkedin.com" },
		],
		contact: {
			phone: "(11) 1234-5678",
			email: "contato@academia.com.br",
		},
	});

	return {
		nome,
		navbarItens,
		heroText,
		textos,
		services,
		footer,
		setNome,
		setNavbarItens,
		setHeroText,
		setTextos,
		setServices,
		setFooter,
	};
}
