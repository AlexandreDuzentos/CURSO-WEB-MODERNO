import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    return (  
        <Layout titulo="Usando componentes">
          <Cabecalho Titulo="Next.js & React"/>
          <Cabecalho Titulo="Aprenda next na prática"/> 
        </Layout>            
    )
}