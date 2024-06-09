// import Filho from "./Filho"
import React from "react"
import { childrenWithProps } from "../utils/utils"

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
          /*
              Referenciar componentes filhos diretamente dentro de um componente pai
              deixa o meu componente pai menos flexível. A maneira mais flexível seria
              passar os componente filho diretamente dentro da chamada do componente pai.
          */
            }
            {/*
              <Filho nome="Pedro" sobrenome={props.sobrenome} />
            */
            }
           { 
           /* 
              Passando todas as propriedades do conponente pai para o componente 
              filho, usando o operador spread, para espalhar todos os atributos do
              componente pai no componente filho.
             */
            }
            {/*
              <Filho {...props} />
            */}

          {/*
            Passando todas as propriedades do componente pai para o componente filho,
            porém agora, sobrescrevendo a propriedade nome.
           */
           }
           {
           /*
              <Filho {...props} nome="Carla" />
            */
          }

          {
          /*
            Fazendo uma referência para a chamada dos componentes filhos passados dentro
            da chamada do componente Pai para que eles sejam renderizados dentro do componente
            jSX <ul></ul>, então basicamente eu estou dizendo em qual ponto dentro do componente
            pai eu quero que os filhos estejam.
           */
          }
          {/* {props.children} */}

           {
           /*
             A função cloneElement permite clonar um conponente a adicionar novas
             propriedades a ele.

             O segundo argumento passado para função clone está espalhando as
             propriedades do objeto props dentro de um outro objeto estas propriedades são
             propriedades do componente pai para que elas possam ser adicionadas
             ao componente que foi clonado,  que corresponde ao componente filho 
             que foi chamado dentro da chamada do componente pai, propriedades do objeto que foi
             passado para a função cloneElement podem sobrescrever propriedades do componente
             que foi clonado, dentro desse mesmo objeto na qual foi espalhado as propriedas
             do elemento pai, também serão espalhadas as propriedades do componente filho, isto
             para que as propriedades dos componentes filhos não possam ser sobrescritas pelas
             propriedades do componente pai.
             
             A função cloneElement funciona para um único componente.

             A solução para isso será interar em cima dos componentes filhos e chamar
             a função cloneElement.

             a função map do React possui pega num array de componentes e itera em cima
             deles aplicando uma lógica de transformação nesses componentes para gerar
             novos componentes.

             Ela recebe dois parâmetros, o primeiro é o array de componentes, e o segundo
             é a callback que terá a lógica de transformação desses componentes.
           */
           }

             
           {
            /*
            Colocando um único par de chaves que envolva toda chamada de funções,
            elimina-se a necessidade de fazer isso para cada função.
            */
           }
           { 

           /*
           React.Children.map(props.children, child => {
              return React.cloneElement(child, {...props, ...child.props})
           })
           */

           }

           {childrenWithProps(props)}

           

          
        </ul>
    </div>