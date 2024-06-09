import React  from "react"
import ReactDOM from "react-dom/client"

/**
 * importando um componente do react, ele pode ser chamado de qualquer nome, e não
 * necessariamente Primeiro, esse é um componente baseado em função, componentes também
 * podem ser baseados em classes, o nome de um componente deve ser iniciado sempre com
 * letras maiúsculas, senão ele não é renderizado corretamente, isso é para que o react
 * consiga diferenciar oque é um componente seu do que é um componente JSX puro, como uma <div></div>
 * por exemplo.
 */
import Primeiro from "./componentes/Primeiro"
// import BomDia from "./componentes/BomDia"
 
/*
 importando múltiplos componentes, um objeto é retornado contendo todas os componentes
 que foram exportados, o {} é o operador destruturing, ele está retirando o componentes que 
 foram exportados do objeto, os componentes nada mais são do que funções que retornam
 alguma coisa.

 Uma outra forma de ter acesso aos componentes nesse arquivo é atráves da notação ponto,
 por exemplo: 

 import Multiplos from "./componentes/Multiplos"

  root.render(
      <Multiplos.BomDia nome="Paulo" ></Multiplos.BomDia>
  )

  Resumindo, as formas mais comuns de acessar os componentes exportados são:
  Uso do operador destructuring, uso da notação ponto, acesso direto.
*/

import BoaTarde from "./componentes/Multiplos"

import Saudacao from "./componentes/Saudacao"

import Pai from "./componentes/Pai"
import Filho from "./componentes/Filho"

/*
 createRoot permite-te selecionar um elemento raíz para exibir componentes React dentro
 de um nódo da DOM no browser, esse elemento está sendo selecionado de dentro da página index.html
 que está na pasta public na arquitetura do projeto React.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
   render renderiza componente do React dentro do elemento root que foi selecionado
   acima, o elemento <h1>React</h1> que foi passado como argumento para a função render
   é um componente do React e não um HTML, o React possui sua própria sintaxe
   que é chamada de JSX(JavaScript extended), que é uma forma muito particular de escrever código
   javascript, esse <h1></h1> parece-se com HTML, mas é um JSX, ele é um javascript que será
   substituido na hora que for feito a transpilação de JSX para javascript puro que fará
  várias chamadas de funções Javascript puras(que é a linguagem
   que o browser e o node entendem).

   O código jsx é transpilado para js puro, ou seja, é convertido, e esse código js puro
   gerado nada mais é do que uma série de chamadas que geram os elementos puros da DOM.

   <h1></h1> essa sintaxe não é JavaScript puro, é um JSX, que faz com que você programe de uma
   forma mais parecida como se fosse um HTML, mas na verdade por baixo dos panos ele vai fazer
   várias chamadas usando JavaScript puro para criar os elementos e incluir texto dentro deles.

   Por exemplo, para criar um elemento via JavaScript e  inserir um texto dentro dele nós podemos fazer 
   a seguinte chamada: document.createElement("h1").innerHTML = "React", então no
   momento em que é feito a transpilação de um JSX para JS puro, por exemplo o <h1></h1>, uma série de chamada
   de funções puras do JavaScript(da DOM) como as de cima são feitas para nós possamos ter
   os elementos puros da DOM.

   <h1></h1> apesar de que isso parece HTML, ele é javascript(sintaxe JSX),  que só se revelará
   um javascript de verdade quando houver a transpilação desse JSX para Javascript
   puro ou seja, chamadas de código javascript puro para gerar os elementos HTML de fato.

   Com isso, concluimos que o código escrito no React não é um Javacript puro, mas sim um JSX,
   que é uma sintaxe estendida do React, que não compreendida pelo browser e nem pelo node, pois 
   eles compreendem apenas JavaScript puro, é feito uma transpilação do código React para JavaScript
   puro(chamadas de funções do JS puro(DOM)) para gerar os elementos HTML de fato.

   É importante perceber desde o ínicio, que há uma certa mistura entre tecnologias como o JS, CSS e HTML quando
   utilizamos uma biblioteca como o React, na verdade você passa a separar menos as coisas por tecnologia,
   como é a forma tradicional, o css num arquivo, o JavaScript num arquivo e HTML noutro arquivo, você 
   deixa um pouco essa separação tecnológica e passa a organizar o seu código muito mais em termos
   de componentes, por exemplo: eu quero criar um botão, esse botão tem HTML, CSS E um javascript
   associado a ele, então, você passa a pensar muito mais em componentes, juntando as tecnologias
   para garantir que aquele componente seja completo, tenha tudo oque precisa e a junção de todos esses
   componentes de forma integrada irá formar a sua aplicação.

   react-dom : é a parte do react que comunica-se especificamente com a DOM, com a página.

   react: é o pacote do core da biblioteca, ele terá todas a chamadas que serão geradas a partir
   da conversão dos elementos JSX(<h1></h1>) para chamadas de funções do JS puro, o pacote react deve estar no escopo de qualquer
   projeto que use JSX, pois ele é o responsável por fazer as chamadas internas de código js puro que convertem o JSX para
   elementos puros da DOM na hora que o transpilador for acionado, ou seja, na hora que o projeto
   for executado.

   o React é uma biblioteca tecnicamente, não é um framework, ele trabalha apenas com a camada de
   visão.

   Transpilador: é um tipo de tradutor que pega o código fonte de um programa escrito em uma
   linguagem de programação como entrada e produz código fonte equivalente na mesma ou uma linguagem
   de programação diferente.
 */

/**
 *  <React.StrictMode>  - permite encontrar bugs comuns em seus componentes no início do
 *  desenvolvimento, e ele também serve como componente parent para componentes dentro dele.
 * 
 * */

/** 
 * Referenciando um componente que foi importado de um arquivo JSX <BomDia></BomDia>, ao
 * referenciarmos uma componente é feita uma chamada para a função que o exportou.
 * 
 * O parâmetro nome que foi setado dentro do componente é passado como argumento para a
 * função que exportou o componente quando ela é chamada, por convenção chamamos o
 * parâmetro de props, os parâmetros passados como parâmetro para o componente são 
 * somente de leitura, você não consegue alterar as propriedades que você recebeu de um componente
 * na classe ou na função que o exportou.
 * 
 *  */
root.render(
  <React.StrictMode> 
    <div>
      { /* <BomDia nome="Guilherme" idade={10} ></BomDia> */}
      <BoaTarde nome="Paulo" ></BoaTarde>
    </div> 
    <div>
      {
      /*
         Os atributos tipo e nome  são criados dinamicamente dentro do atributo
         props(que é um objeto) da classe que exportou esse componente, ou seja,
         da classe que o encapsulou, isso quando o componente é referenciado em 
         algum lugar e para ele passado esses respectivos atributos, porém esses
         mesmos atributos que serão dinâmicamente criados dentro do atributo
         props são apenas de leitura, você não pode modificar eles.
        
         referenciar um componente baseado em classe é o mesmo que instânciar um
         objeto da classe que encapsula(guarda dentro dele) o componente.
        */
      }

      
       <Saudacao tipo="Bom dia" nome="Alexandre"></Saudacao> {/* Componente baseado em classe */}
       
      {/* <Pai nome="Marcos" sobrenome="Martins" /> */}  { /* Referenciando componente pai que referencia um componente filho dentro dele */}

       <Pai nome="Matias" sobrenome="Almeida">
           {/* Dentro dos componentes filhos deseja-se reaproveitar o sobrenome
           já setado no componente pai */}
           <Filho nome="Alexandre" />
           <Filho nome="Ruth" />
           <Filho nome="Taissa" />
          {
          /*
            Como faço para passar conponentes filhos diretamente na chamada
            do componente e não diretamente dentro do componente.
          */
          }
       </Pai>
    </div>
  </React.StrictMode>
);

