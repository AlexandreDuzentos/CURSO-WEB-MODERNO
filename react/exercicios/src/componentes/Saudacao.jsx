import React, { Component } from "react"

/*
    Um componente baseado em classe tem algumas outras funcionalidades que um componente
    funcional, ou seja, baseado em função não tem, como por exemplo: componente de classe pode
    ter um estado e métodos de ciclo de vida, por exemplo eu quero chamar um determinado trecho
    de código antes de um componente ser renderizado, quero chamar um determinado trecho de código
    antes de um componente ser destruído.
*/


/*
  Quando eu tenho um componente baseado em classe, a classe que o encapsula deve
  herdar da classe Component que a classe pai de todos os componentes React, ou seja,
  todos os componentes React são um component, oque significa que todos os componentes
  e atributos possuem características e comportamentos comuns.

  Espera-se receber nesse componente(Saudacao) dois parâmetros, o primeiro é o tipo de saudação
  e o segundo é o nome da pessoa, para acessar as propriedades passadas para o componente nós
  usamos a palavra reservada this, que refere-se ao objeto atual, ou seja, ao objeto que foi
  instânciado a partir dessa classe.
 */
export default class Saudacao extends Component {

    /*
     Dentro de toda classe que é um component, ou seja, herda de component, tem um
     atributo chamado state(que é um objeto) cujo seus atributos podem ser alterados,
     diferente do atributo props(que é um objeto) cujo seus valores não podem ser alterados,
     ou seja, são somente de leitura, então para que os valores do atributo props possam ser
     alterados, eles serão atribuídos para o objeto state.

     
     1- Inicializando o objeto state com valores hardcoded, ou seja, inserindo valores 
     dentro dele que não provém de nenhuma fonte externa, esse é o estado inicial do objeto.

     2- Inicializando o objeto state com valores provenientes do componente, esse é o estado
     inicial do objeto.

     você pode tanto inicializar o state diretamente dentro do escopo da classe ou dentro
     do construtor.
    */
     state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    

    constructor(props) {
        /*
         Chamando o construtor da superclasse e passando para ele o objeto props, isso
         está sendo feito para que as propriedades dentro do objeto props possam ser enviadas
         para a superclasse, para que eu possa acessa-las a partir da subclasse.
          */
        super(props)

        /** Usando a função bind para fazer com que o this dentro dad funções setTipo
         * e setNome aponte para a instância atual do componente.
         */
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)

    }

    /** 
     *  Essa função será invocada quando o evento onChange associado a um elemento JSX puro
     *  do tipo input for disparado, ela é responsável por mudar o valor dentro do input, isso
     *  é necessário porque por padrão quando atribuimos algum valor do objeto props para um
     *  campo do tipo input, o valor daquele atributo será apenas de leitura, não poderemos modificar o valor
     *  dele, mesmo tratando o evento onChange, os parâmetros passados como parâmetro para o componente são 
     *  somente de leitura, você não consegue alterar as propriedades que você recebeu de um componente
     *  na classe na função que o exportou, para poder alterar o valor das propriedades recebidas
     *  dos componentes nós precisamos trabalhar com estado, quando trabalhados com estado o nosso
     *  o valor da nosso propriedade já poderá ser alterado pelo evento onChange, para trabalharmos
     *  com o estado usaremos a propriedade state ao invés da props
      */
    setTipo(e){
        /*
         Método responsável por modificar o estado de um componente, o componente é somente
         renderizado depois que o estado é modificado, quem manda na renderização é o estado
         do objeto do componente, o método state recebe um objeto que pode ter um ou mais atributos
         que eu quero alterar no estado do objeto, esse estado pertence a aquele objeto na qual
         você está trabalhando, cada objeto terá seu próprio estado, ou seja, cada referência ao
         componente terá seu próprio estado.

         No React o fluxo de atualização de um componente é sempre unidirecional, sempre o estado do objeto do componente
         muda para que o estado do componente mudando o componente visual se atualize e não contrário, ou seja, o componente visual
         só é atualizado quando o estado do objeto do componente muda.

         Oque acontece? No componente você dispara um evento e partir desse evento você pode
         mudar o estado e o estado mudando o componente se atualiza, ou seja, primeiro é o estado do objeto do componente
         que muda e depois o componente visual que se atualiza, isso é o que chamamos one-way-data-binding, ou 
         seja ligação de dados unidirecional, oque significa que os trafegam em uma única direção, de
         um lado você tem os dados da sua aplicação(no objeto do componente), ou seja, o estado da sua aplicação e do outro lado
         você tem um componente visual, você atualiza o estado do objeto do componente e mudando o estado o componente visual se 
         atualiza.

         two-way-data-binding é um conceito que o Angular utiliza bastante, ele indica que
         o fluxo de atualização de um componente é bidirecional, isso significa que tanto
         o componente visual pode mudar o seu próprio estado componente e quanto o objeto do componente pode
         mudar estado de um componente visual.
         */
        this.setState({tipo : e.target.value})
    }

    setNome(e){
       this.setState({nome: e.target.value})
    }

    /*
     Função responsável por renderizar o componente, ela vem por herança da classe
     Component.
     */
    render(){
        /*
         O this.props é um objeto que conterá as propriedades
         que serão definidas quando o componente for referenciado

         E aqui eu estou desestruturando esse objeto props

         atributos são criados dinamicamente dentro do objeto props quando
         o componente é referenciado em algum lugar e para ele passado atributos.

         referenciar um componente baseado em classe é o mesmo que instânciar um
         objeto da classe que encapsula do componente passando como argumento para
         o construtor um objeto props com as propriedades setadas no componente
         e invocar a função render.
         */
        const { tipo, nome } = this.state

        /** Abaixo eu estou chamando uma expressão dentro do return, e dentro
         * da expressão coloca-se o JSX.
         * 
         * o par de chaves {identificadorVariavel} serve para interpolar variáveis, ou seja,
         * meter uma variável entre strings.
         */

        /*
        Forma 1 - o this dentro das funções setTipo e setNome apontará para a instância do
        objeto atual, pois quem as chama é o própria classe Saudacao, logo, o this dentro delas
        apontará para as instâncias do componente Saudacao.

        Aqui o evento onChange está chamando a arrow function e não as funções setTipo e setNome,
        logo não tem como o this dentro delas estar a apontar para um local diferente das instâncias
        do componente Saudacao, pois é o componente saudacao quem está a chama-las.

        return (
           <div>
               <h1>{tipo} {nome}!</h1>
               <hr/>
               <input type="text" placeholder="...Tipo" value={tipo} onChange={e => this.setTipo(e)} />
               <input type="text" placeholder="...Nome" value={nome} onChange={e => this.setNome(e)} />
           </div>
        )
        */

        /*

        Forma 2 - o this dentro das funções setTipo e setNome apontará para um local diferente da
        instância do objeto atual, pois não é o próprio conponente quem as chama, mas sim o evento
        onChange, logo, o this dentro delas apontará para o evento.

        Para fazermos o this dentro das funções setTipo e setNome apontarem para as instâncias
        do componente saudacao, precisaremos usar a função bind num local onde o this aponte
        para a instância atual, que no caso é o método construtor.
        */

        return (
           <div>
               <h1>{tipo} {nome}!</h1>
               <hr/>
               <input type="text" placeholder="...Tipo" value={tipo} onChange={this.setTipo} />
               <input type="text" placeholder="...Nome" value={nome} onChange={this.setNome} />
           </div>
        )
    }
}