export default function Cabecalho(props) {
   /* As propriedades do objeto Props é somente leitura */
   return (
      <header>
         <h1>{props.Titulo}</h1>
      </header>
   )
}