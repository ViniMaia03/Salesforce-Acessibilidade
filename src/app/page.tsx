import Inicio from "@/components/Inicio";
import Image from "next/image";
import '../styles/style.css';
import SessaoAcessibilidade from "@/components/SessaoAcessibilidade";
import Mercado from "@/components/SessaoMercado";
import Rodape from "@/components/Rodape";
import RegisterForm from "@/components/Formulario";
import Produtos from "@/components/Produtos";


export default function Home() {
  return (
    <>
      <Inicio />
      <SessaoAcessibilidade />
      <Mercado />
      <Produtos />
      <RegisterForm />
      <Rodape />
    </>
  );
}
