import styles from "../styles/layout.module.css"
import Link from "next/link"

export default function Layout(props){
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
               <p className={styles.paragraph}>{props.titulo ?? "Mais um elemento"}</p>
               <Link href="./">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
              {props.children}
            </div>
        </div>
    )
}