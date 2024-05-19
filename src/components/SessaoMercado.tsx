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
                            <span className="span-mercado"> Nossa Acessibilidade </span>
                            <h2 className="titulo-mercado"> Conheça nossos Métodos </h2>
                            <p className="subtitulo-mercado"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor facere adipisci saepe assumenda! Et, eligendi quaerat illo architecto nemo sunt, nam alias placeat nobis recusandae quibusdam deleniti officia eius quas. </p>
                        </div>
                    </div>
                </Container>
            </section>        
        </>
    )
}