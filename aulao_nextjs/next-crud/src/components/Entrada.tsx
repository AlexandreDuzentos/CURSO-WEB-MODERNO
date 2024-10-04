interface EntradaProps {
    tipo?: "text" | "number"
    texto: String
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
    className: String
}

export default function Entrada(props: EntradaProps){
   return (
      <div className={`flex flex-col ${props.className}`}>
         <label className="mb-4">{props.texto}</label>
         <input onChange={event => props.valorMudou?.(event.target.value)} type={props.tipo || "text"} 
          value={props.valor}
          readOnly={props.somenteLeitura}
           className={`
             border border-purple-500 rounded-lg
             focus:outline-none bg-gray-100
             px-4 py-2
             ${props.somenteLeitura ? "" : "focus:bg-white"}
           `}
           />
      </div>
   )
}