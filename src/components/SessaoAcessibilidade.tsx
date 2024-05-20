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
                            <p className="subtitulo-acessibilidade"> Levando em consideração o tamanho de mercado, iremos criar um menu de acessibilidade, no próprio Header do site, para que usuários com qualquer dificuldade visual possa usufruir de todos os elementos do site. Já usuários que possuem dificuldades auditivas, cada vídeo e imagem possuirá legendas ja estabelecidas no código HTML. </p>
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