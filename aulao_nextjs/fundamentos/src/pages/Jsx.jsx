import Layout from "@/components/Layout"

export default function Jsx(){
    const a = 6
    const b = 3
    console.log(a * b)
    const obj = {nome: "Alexandre", idade: 21}
    const title =  <h1>JSX é um conceito Central</h1>

    function subtitulo(){
        return <h2>{"A importância do JSX é de...".toUpperCase()}</h2>
    }
    /*
     Dentro de um trecho de código jsx eu não posso acessar
     "coisas" do javascript puro, para acessar "coisas" do javascript puro,
     é preciso usar um par de chaves para delimitá-las
     */
    return (
        <Layout titulo="Entendendo o JSX">
          <div>
            {title}
            {subtitulo()}
            {a * b}
            {JSON.stringify(obj)}
          </div>
        </Layout>     
    )
}