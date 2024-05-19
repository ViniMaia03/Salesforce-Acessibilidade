import Image from "next/image";
import ArrowDown from '@/assets/arrow-down.svg'
import '../styles/style.css';

type Props = {
    name: string
}

export default function Item({name}: Props) {
    return(
        <>
            <li className="item">
                <button className="btn-cabecalho">
                    <span className="txt-cabecalho"> {name} </span>
                </button>
            </li>
        </>
    )
}