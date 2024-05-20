import Inicio from "@/components/Inicio";
import Image from "next/image";
import '../styles/style.css';
import SessaoAcessibilidade from "@/components/SessaoAcessibilidade";
import Mercado from "@/components/SessaoMercado";
import Rodape from "@/components/Rodape";
import RegisterForm from "@/components/Formulario";

export default function Home() {
  return (
    <>
      <Inicio />
      <SessaoAcessibilidade />
      <Mercado />
      <RegisterForm />
      <Rodape />
    </>
    
  );
}
