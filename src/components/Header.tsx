import Image from "next/image";
import Logo from '@/assets/salesforce-logo.svg'
import ArrowDown from '@/assets/arrow-down.svg'
import Item from "./Itens";
import '../styles/style.css';

export default function Header() {
    return (
        <>
            <header className="cabecalho">
                <div className="menu">
                    <div>
                        <div className="nav">
                            <Image src={Logo} alt="Logo da Salesforce" />

                            <ul className="lista">
                                <Item name="PROPOSTA"/>
                                <Item name="ACESSIBILIDADE"/>
                                <Item name="EQUIPE"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
   
