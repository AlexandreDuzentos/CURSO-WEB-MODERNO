interface BotaoProps {
    cor?: 'green' | 'blue' | 'grey'
    className?: String
    children: any
    onClick?: () => void

}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? "grey"
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}