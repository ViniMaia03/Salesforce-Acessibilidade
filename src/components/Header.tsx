import Image from "next/image";
import Logo from '@/assets/salesforce-logo.svg'
import ArrowDown from '@/assets/arrow-down.svg'
import Item from "./Itens";
import Buscar from "./Buscar";
import '../styles/style.css';

export default function Header() {
    return (
        <>
            <header className="cabecalho">
                <div className="menu">
                    <div className="menuNav">
                        <div className="nav flex-1">
                            <Image src={Logo} alt="Logo da Salesforce" />

                            <ul className="lista">
                                <Item name="PROPOSTA"/>
                                <Item name="ACESSIBILIDADE"/>
                                <Item name="EQUIPE"/>
                            </ul>
                        </div>

                        <div>
                            <Buscar />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
   
