import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void 
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <>
        {
        id ?
         <Entrada
            texto="código"
            tipo="text" valor={id}
            somenteLeitura
            className="mb-4"
           /> : false

        }  
          <Entrada
            texto="nome"
            tipo="text"
            valor={nome} 
            valorMudou={setNome}
            className="mb-2"
            />

          <Entrada
             texto="idade" 
             tipo="number"
             valor={idade}
             valorMudou={setIdade}
             className=""
             />
             <div className="flex justify-end mt-7">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))} cor="blue" className="mr-2">
                   {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao onClick={props.cancelado} cor="grey">
                   Cancelar
                </Botao>
             </div>
        </>   
    )
}