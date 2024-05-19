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
                        <p className="subtitulo-inicio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo doloremque numquam, repellat, ipsum quod in omnis incidunt asperiores similique quas nesciunt. Voluptate unde, quibusdam laudantium totam aut autem quidem. </p>
                    </div>

                    <div className="area-btn-inicio">
                        <BotaoInicio desc="Acessibilidade"/> 
                        <BotaoInicio desc="Mercado"/> 
                    </div>
                </Container>
            </section>
        </>
    )
}