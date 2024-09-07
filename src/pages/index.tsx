import { GRProps } from "@/utils/type";
import GRFooter from "@/components/GRFooter/GRFooter";
import GRServices from "@/components/GRServices/GRServices";
import GRAbout from "@/components/GRAbout/GRAbout";
import GRHero from "@/components/GRHero/GRHero";
import GRNavbar from "@/components/GRNavbar/GRNavbar";

export default function Home({ empresa }: GRProps) {
  return (
    <div>
      <GRNavbar
        title={empresa.nome}
        itens={[
          { label: "Inicio", href: "/", align: "center" },
          { label: "Entrar", href: "/login", align: "right" },
        ]}
      />
      <GRHero
        title={empresa.nome}
        body="Transforme sua saúde e bem-estar com treinos personalizados e uma comunidade motivadora."
      />
      <GRAbout
        itens={[
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
        ]}
      />
      <GRServices
        itens={[
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
        ]}
      />
      <GRFooter
        aboutText="Na Academia Fitness, oferecemos um ambiente acolhedor e profissional para ajudar você a alcançar suas metas de saúde e bem-estar. Junte-se a nós e transforme sua vida."
        links={[
          { href: "/", label: "Início" },
          { href: "/services", label: "Serviços" },
          { href: "/about", label: "Sobre" },
          { href: "/contact", label: "Contato" },
        ]}
        contact={{
          phone: "(11) 1234-5678",
          email: "contato@academia.com.br",
        }}
        socialLinks={[
          { platform: "Facebook", url: "https://facebook.com" },
          { platform: "Twitter", url: "https://twitter.com" },
          { platform: "Instagram", url: "https://instagram.com" },
          { platform: "LinkedIn", url: "https://linkedin.com" },
        ]}
        footerText={`© ${new Date().getFullYear()} Academia Fitness. Todos os direitos reservados.`}
      />
    </div>
  );
}
