import '../styles/style.css';
import Image from 'next/image';
import Customer from '@/assets/Customer-360.webp'
import Data from '@/assets/data-cloud.webp'
import Einsten from '@/assets/einsten-analytics.png'
import Container from "./Container"

export default function Produtos() {
    return(
        <>
            <Container>
                <h2 className='produtos-titulo'> Produtos Salesforce </h2>
                <div className="produtos">
                    <div className="card-produto">
                        <Image src={Data} alt='Data Cloud' className='data'/>
                        <h3 className="card-titulo"> Data Cloud </h3>
                        <span className="card-desc"> Conecte, integre e combine dados de qualquer produto e sistema em uma visão completa sobre cada cliente. </span>
                    </div>
                    
                    <div className="card-produto">
                        <Image src={Einsten} alt='Einsten Analytics' className='analytics'/>
                        <h3 className="card-titulo"> Einsten Analytcs </h3>
                        <span className="card-desc"> Automatize processos, crie apps melhores e proteja dados em todo o Customer 360. </span>
                    </div>
                </div>
            </Container>
        </>
    )
}