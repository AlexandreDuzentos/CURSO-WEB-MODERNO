import React, { Component } from "react"
import "./Calculator.css"

import Button from "../components/Button"
import Display from "../components/Display"

/* Objeto que representará o estado inicial da minha calculadora */
const initialState = {
    displayValue: '0', // propriedade que indica o valor que será exibido no componente display
    clearDisplay: false, // propriedade que indica se a tela deve ser limpada ou não
    operation: null, // propriedade que armazena a operaçao
    values: [0, 0], // propriedade que armazenará os dois valores de uma operação
    current: 0 // propriedade que indicará quais dos valores do array eu estarei manipulando, de índice 0 ou 1.
}

export default class Calculator extends Component {

    state = {...initialState}
    
    /* Função responsável por restaurar o estado do componente ao inicial */
    clearMemory(){
        this.setState({...initialState})
    }

    /* 
       Função responsável por setar uma operação seja igualdade, adição, subtração,
       divisão e multiplicação.
    */
    setOperation(operation){
        /*
         Verificação necessária para mudar o índice do valor que está sendo manipulado
         no array para 1 e setar o clearDisplay para true, pois agora o displayValue precisará
         ser limpado.
         */
        if(this.state.current === 0){
            // Aqui eu ainda não tenho o segundo valor
            this.setState({operation, current: 1, clearDisplay : true})
        } else {
            // Aqui eu já tenho o segundo valor
            const equals = operation === "="
            const previousOperation = this.state.operation

            /*
             Clonando o array de values do estado do componente e atribuindo para a variável
             values.
             */
            const values = [...this.state.values]
            /* Opcionalmente podiamos usar a estrutura if e switch */
            values[0] = eval(` ${values[0]} ${previousOperation} ${values[1]}`)

            /*
               Esse teste está sendo feito porque o values[1] pode permancer 0 se eu digitar
               a mesma operação duas vezes seguidas e divisão por zero resulta em no tipo
               Infinity oque deixará a minha calculadora com bugs.
             */
            if (isNaN(values[0]) || !isFinite(values[0])) {
                this.clearMemory()
                return
            }
            values[1] = 0
            this.setState({ 
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values: [values[0], values[0]]
            })
        }

    }

    /* Função responsável por adicionar um dígito do componente display, como argumento
       para essa função é passada apenas o ponto, e números de 0 a 9  */
    addDigit(n){
        /*
         Verificação para barrar a entrada de um segundo ponto no display, pois 
         um número pode possuir apenas um ponto.
         */
        if(n === "." && this.state.displayValue.includes(".")){
            /* Ignorando a tentativa de inserção de um segundo ponto */
            return
        }

        /*

         O clearDisplay representa se o displayValue deve ser limpado ou não.

         Para que a variável clearDisplay esteja setada como true, a propriedade displayValue
         do estado do componente precisa ter o valor zero ou a propriedade clearDisplay precisa
         estar setada como true.

        A tela é limpa quando temos o valor zero no display e quando quando inserimos uma
        operação na calculadora.
        */
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay

        /*
         O currentValue representa o valor atual que está no displayValue.

         Se o clearDisplay for true, então, o currentValue será vázio, senão o currentValue
         será o valor current(que está no displayValue)
         */
        const currentValue = clearDisplay ? "" : this.state.displayValue

        /* A constante displayValue representará o novo valor que eu irei colocar no display */
        const displayValue = currentValue + n

        /* Mudando o estado do componente */
        this.setState({displayValue, clearDisplay: false })

        if(n !== "."){
            /* Atribuindo o índice que está sendo manipulado quando um número é digitado */
            const i = this.state.current 

            /* Atribuíndo o valor que está sendo digitado a uma varíavel */
            const newValue = parseFloat(displayValue)

            /* Clonando o array values do estado do componente para uma variável */
            const values = [...this.state.values]

            /*
             Setando um valor no índice do array que está sendo manipulado, este valor
             é oque está sendo digitado.
             */
            values[i] = newValue

            console.log(values)

            /*
             Modificando o estado do objeto com um valor novo no índice do array que
             estava sendo manipulado.
            */
            this.setState({values})
        }
    }

    render(){

        /*
          Isso está sendo feito por que essas função serão chamadas muitas vezes, a fun
          cão clearMemory não foi utilizada aqui por que ela será chamada uma única vez,
          então o objetivo é termos o reuso da arrow function e proteger o this para que ele
          de fato aponte para a instância do objeto atual e não para  o this de quem chamou
          a função que seria o componente button, então função arrow está protegendo o this.
         */
         const addDigit = n => this.addDigit(n)
         const setOperation = op => this.setOperation(op)
        /*
          O return conterá uma expressão delimitada por parênteses que representa os
          sub-componentes(puros) do meu componente personalizado Calculator.

          Para setar uma classe num elemento JSX usamos a palavra reservada className, uma
          vez que a palavra class é utilizada para criar uma classe, mas durante a transpilação
          a palavra className é convertida para class.
         */
        return (
            <div className="calculator">
                 <Display value={this.state.displayValue} />
                 <Button label="AC" click={() => this.clearMemory()} triple />
                 <Button label="/" click={setOperation} operation />
                 <Button label="7" click={addDigit} />
                 <Button label="8" click={addDigit} />
                 <Button label="9" click={addDigit} />
                 <Button label="*" click={setOperation} operation />
                 <Button label="4" click={addDigit} />
                 <Button label="5" click={addDigit} />
                 <Button label="6" click={addDigit} />
                 <Button label="-" click={setOperation} operation />
                 <Button label="1" click={addDigit} />
                 <Button label="2" click={addDigit} />
                 <Button label="3" click={addDigit} />
                 <Button label="+" click={setOperation} operation />
                 <Button label="0" click={addDigit} double />
                 <Button label="." click={addDigit} />
                 <Button label="=" click={setOperation} />
                 
            </div>
        )
    }
}