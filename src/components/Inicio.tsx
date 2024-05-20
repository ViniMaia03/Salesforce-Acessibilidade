import Container from "./Container"
import BotaoInicio from "./BotaoInicio";
import Image from "next/image";
import Acessibilidade from '@/assets/acessibilidade.png'
import '../styles/style.css';

export default function Inicio() {
    return(
        <>
            <section className="inicio">
                <Container>
                    <div className="conteudo-txt-inicio">
                        <h1 className="titulo-inicio"> Salesforce de uma maneira acessível para todos. </h1>
                        <p className="subtitulo-inicio"> Hoje, a empresa Salesforce, se encontra com um portal nada acassível para clientes que possuem certas dificuldades para acesso. Pensando nisso, e levando em consideração o tamanho de mercado, nós alunos no 1ºTDSPB pensamos na seguinte solução. </p>
                    </div>

                    <div className="area-btn-inicio">
                        <BotaoInicio desc="Nossos Métodos"/> 
                        <BotaoInicio desc="Mercado"/> 
                    </div>
                </Container>
            </section>
        </>
    )
}