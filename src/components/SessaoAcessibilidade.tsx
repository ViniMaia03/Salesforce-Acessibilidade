import Container from "./Container"
import Acessibilidade from '@/assets/20945083.jpg'
import Image from "next/image"

export default function SessaoAcessibilidade() {
    return(
        <>
            <section sessao-acessibilidade>
                <Container>
                    <div className="acessibilidade-container">
                        <div className="acessibilidade">
                            <span className="span-acessibilidade"> Nossa Acessibilidade </span>
                            <h2 className="titulo-acessibilidade"> Conheça nossos Métodos </h2>
                            <p className="subtitulo-acessibilidade"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor facere adipisci saepe assumenda! Et, eligendi quaerat illo architecto nemo sunt, nam alias placeat nobis recusandae quibusdam deleniti officia eius quas. </p>
                        </div>

                        <div>
                            <Image src={Acessibilidade} alt="Acessibilidade" className="acessilidade-img"/>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}