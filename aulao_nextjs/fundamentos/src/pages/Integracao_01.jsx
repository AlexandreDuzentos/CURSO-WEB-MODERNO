import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao(){

    /* Estado 1 */
    const [codigo, setCodigo] = useState(1)

    /* Estado 2 */
    const [cliente, setCliente] = useState({})

    /*
      Usando async await, oque permite
      que o código seja executado de uma
      forma mais síncrona.
     */
    async function obterCliente(){
        let resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        let dados = await resp.json()
        setCliente(dados)
    }

    return (
        <Layout>
            <div>
                {
                 /* o valor dentro do input não é modificado a partir
                    dele mesmo, na verdade, você precisa modificar o estado
                    interno do componente, para que esse estado modificado
                    reflita na sua interface gráfica, que no caso se 
                    trata apenas do próprio input.
                 */}
                <input type="number" value={codigo} 
                 onChange={event => setCodigo(event.target.value)}/>
                <button onClick={obterCliente}>Obter cliente</button>
            </div>
           <ul>
              <li>Código: {cliente.id}</li>
              <li>Nome: {cliente.name}</li>
              <li>Email: {cliente.email}</li>
           </ul>
        </Layout>
    )

}