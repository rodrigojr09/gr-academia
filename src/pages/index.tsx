import type { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

const Home: NextPage = () => {
  const empresa = { nome: "Academia Fit" }; // Substitua pelo nome real da academia

  return (
    <div>
      <Navbar empresa={empresa} />
      <Hero empresa={empresa} />
      <About empresa={empresa} />
      <Services empresa={empresa} />
    </div>
  );
};

export default Home;
