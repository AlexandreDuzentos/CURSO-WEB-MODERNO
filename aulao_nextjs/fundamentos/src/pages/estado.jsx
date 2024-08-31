import { useState } from "react"
import Layout from "@/components/Layout";


/*
A partir da versão 16.8 do React já podemos criar componentes
baseados em função com estado, isso é possível por conta do Hooks.
*/
export default function estado(){ 
    /*
     O useState é uma função que permite manipular o estado
     de um componente funcional, ele retorna um array, na primeira
     posição do array temos o valor inicial do estado e na segunda
     posição uma função para modificar o estado do componente.

     A função useState está dentro de um grupo de funções que a gente
     conhece como React hooks.
    */
    let [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(++numero)
    }

   return (
      <Layout titulo="Componente com estado">
          <div>
              {numero}
          </div>
          <button onClick={() => incrementar()}>
             Incrementar
          </button>
      </Layout>
   )
}