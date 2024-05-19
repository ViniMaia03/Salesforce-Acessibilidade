type Props = {
    desc: string
}

export default function BotaoInicio({desc}: Props) {
    return(
        <>
            <button className="botao-inicio">
                <span> {desc} </span>
            </button>
        </>
    )
}