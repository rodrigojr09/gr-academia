import { GRProps } from "@/utils/type";
import GRFooter from "@/components/GRFooter/GRFooter";
import GRServices from "@/components/GRServices/GRServices";
import GRAbout from "@/components/GRAbout/GRAbout";
import GRHero from "@/components/GRHero/GRHero";
import GRNavbar from "@/components/GRNavbar/GRNavbar";

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
