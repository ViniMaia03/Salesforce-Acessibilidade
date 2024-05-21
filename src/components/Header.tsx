import Image from "next/image";
import Logo from '@/assets/salesforce-logo.svg'
import ArrowDown from '@/assets/arrow-down.svg'
import Item from "./Itens";
import Buscar from "./Buscar";
import '../styles/style.css';
import App from "@/components/App";

export default function Header() {
    return (
        <>
            <header className="cabecalho">
                <div className="menu">
                    <div className="menuNav">
                        <div className="nav flex-1">
                            <Image src={Logo} alt="Logo da Salesforce" />

                            <ul className="lista">
                                <Item name="Inicio"/>
                                <Item name="Acessibilidade"/>
                                <Item name="Mercado"/>
                            </ul>
                        </div>

                        <div className="components-header">
                            <Buscar />
                            <App />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
   
