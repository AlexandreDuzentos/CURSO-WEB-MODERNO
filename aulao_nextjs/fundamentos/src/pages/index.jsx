import Navegador from "../components/Navegador"
/*
Exportando um componente react, o porém aqui é que esse 
componente também tem associado a ele uma URL a partir da qual 
eu consigo acessar o componente que é retornado por ele, isso porque ele
está dentro da pasta pages.
 */
export default function Home(){
    /* A propriedade style permite setar estilo inline, ou seja, diretamente no elemento jsx,
    e o padrão de nomenclatura das propriedades css muda de dash case para camel case */
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexWrap: "wrap"
        }}>
            <Navegador cor="green" texto="estiloso" destino="./Estiloso"/>
            <Navegador cor="crimson" texto="exemplo" destino="./Exemplo"/>
            <Navegador cor="violet" texto="JSX" destino="./Jsx"/>
            <Navegador cor="darkblue" texto="Navegacao #01" destino="./navegacao" />

            {/*
             Aqui estamos fazendo uma navegação dinâmica, ou seja uma navegação em que
             parte da url pode mudar e queremos o mesmo arquivo trate essa navegação,
             para que isso seja possível
             o nome do arquivo ou pasta ou ambos para qual a navegação será feita deve estar dentro
             de colchetes, para que quando eu acessar um valor dinâmico na url ele substitua esse
             valor dinâmico pelo nome do arquivo ou nome da pasta ou ambos, em outras palavras, entre na vez do nome do
             arquivo ou pasta ou ambos e o acesso ao valor dinâmico pode ser feito a partir do useRouter.

             Aqui estamos trabalhando com um único parâmetro dinâmico.

             O valor 123 aqui é dinâmico, logo está sujeito a mudanças.
            */}
            <Navegador cor="blue" texto="Navegacao #02" destino="./cliente/123" />
             
             {
             /*
              Aqui estamos trabalhando com dois parâmetros dinâmicos, o valor luanda
              é dinâmico e o valor 456 também é dinâmico.
             */
             }
            <Navegador cor="yellow" texto="Navegacao #03" destino="./cliente/luanda/456" />

            <Navegador cor="pink" texto="Componente com estado" destino="./estado" />

            <Navegador cor="deepskyblue" texto="Integração com API #01" destino="./Integracao_01" />
        </div>
    )
}