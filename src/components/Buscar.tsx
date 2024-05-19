import '../styles/style.css';
import Image from "next/image";
import iconeBuscar from '@/assets/icon-search.svg'

export default function Buscar() {
    return(
        <>
            <div className='buscar'>
                <Image src={iconeBuscar} alt='Icone de Busca' />
                <input type="text"  className='buscarInput' placeholder='Buscar' />
            </div>
        </>
    )
}