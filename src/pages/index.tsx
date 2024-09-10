import { GRProps } from "@/utils/type";
import { GRAbout, GRFooter, GRHero, GRNavbar, GRServices } from "grsistemas-ui";

export default function Home({ empresa }: GRProps) {
  return (
    <div>
      <GRNavbar title={empresa.nome} itens={empresa.navbarItens} />
      <GRHero title={empresa.nome} body={empresa.heroText} />
      <GRAbout itens={empresa.textos} />
      <GRServices itens={empresa.services} />
      <GRFooter {...empresa.footer} academiaName={empresa.nome} />
    </div>
  );
}
