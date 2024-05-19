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
                        <h1 className="titulo-inicio"> Tenha seu banco na plama da sua mão </h1>
                        <p className="subtitulo-inicio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo doloremque numquam, repellat, ipsum quod in omnis incidunt asperiores similique quas nesciunt. Voluptate unde, quibusdam laudantium totam aut autem quidem. </p>
                    </div>

                    <div className="area-btn-inicio">
                        <BotaoInicio desc="Saiba Mais"/> 
                        <BotaoInicio desc="Saiba Mais"/> 
                    </div>
                </Container>
            </section>
        </>
    )
}