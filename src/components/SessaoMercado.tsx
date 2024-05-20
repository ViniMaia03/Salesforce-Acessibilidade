import Container from "./Container"
import Image from "next/image"
import Merc from '@/assets/8784887.jpg'

export default function Mercado() {
    return(
        <>
            <section className="tamanho-mercado">
                <Container>
                    <div className="acessibilidade-container">

                        <div>
                            <Image src={Merc} alt="Acessibilidade" className="img-mercado"/>
                        </div>

                        <div className="mercado-txt">
                            <span className="span-mercado"> Tamanho de Mercado </span>
                            <h2 className="titulo-mercado"> Conheça o Tamanho do Mercado </h2>
                            <p className="subtitulo-mercado"> 46 milhões de pessoas com algum tipo de deficiência. Cerca de 7 milhões de deficientes visuais. Atualmente, dados da Locomotiva Pesquisa & Estratégia revelam que 10,7 milhões de brasileiros têm algum tipo de deficiência auditiva, sendo 54% homens e 46% mulheres. </p>
                        </div>
                    </div>
                </Container>
            </section>        
        </>
    )
}