import Layout from "../../../components/Layout"

/*
  O useRouter é um hook que dá acesso ao router object dentro de
  pages router.

  Hooks é uma nova proposta que irá nos permitir utilizar estado,
  ciclo de vida, entre outras funcionalidades, sem a necessidade de
  escrevermos componentes com classe. A proposta já foi aceita e está
  disponível na versão 16.8 do React.
*/
import { useRouter } from "next/router"

export default function clienteProCodigo(props){
   const router = useRouter()
   return (
      <Layout titulo="Navegacao Dinâmica">
         {/* Acessando valores dinâmicos passados na URL */}
          <span>Código = {router.query.codigo}</span>
           <br></br>
          <span>Filial = {router.query.filial}</span>
      </Layout>
   )
}