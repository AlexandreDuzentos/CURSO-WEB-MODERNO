import Link from "next/link"
import Layout from "../components/Layout"

/* 
 Para referenciar um estilo modular é preciso dar um apelido(alias) a ele no arquivo
 na qual ele está sendo referenciado e é apenas possível referenciar seletores de class
 e id, seletores que representam elementos html não são aceites.
 */
import styles from  "../styles/Estiloso.module.css"

export default function Estiloso(){
   return (
      <Layout titulo="Olá">
        <div className={styles.roxo}>
          <h1>Estilo usando css modularizado</h1>
          {/*
           A parte index do href é opcional, poderia ser apenas ./, uma vez que
           requisições para o diretório ráiz servem o arquivo index por padrão.
          */}
        </div>
      </Layout>
      
   )
}