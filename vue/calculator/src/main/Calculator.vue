<template>
   <div class="Calculator">
       <Display :value="displayValue" />
       <Button label="AC" triple @eventoPersonalizadoDoDesenvolvedor="clearMemory" />
       <Button label="/" operation @eventoPersonalizadoDoDesenvolvedor="setOperation" />
       <Button label="7" @eventoPersonalizadoDoDesenvolvedor="addDigit" />
       <Button label="8" @eventoPersonalizadoDoDesenvolvedor="addDigit" />
       <Button label="9" @eventoPersonalizadoDoDesenvolvedor="addDigit" />
       <Button label="*" operation @eventoPersonalizadoDoDesenvolvedor="setOperation" />
       <Button label="4" @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="5" @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="6" @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="-" operation @eventoPersonalizadoDoDesenvolvedor="setOperation" />
       <Button label="1" @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="2" @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="3" @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="+" @eventoPersonalizadoDoDesenvolvedor="setOperation"  operation />
       <Button label="0" @eventoPersonalizadoDoDesenvolvedor="addDigit" double />
       <Button label="." @eventoPersonalizadoDoDesenvolvedor="addDigit"/>
       <Button label="=" operation @eventoPersonalizadoDoDesenvolvedor="setOperation" />

   </div>
</template>

<script>
/* Importando componentes  */
import Display from "../components/Display"
import Button from "../components/Button"

 export default {
 /*
  Aqui nós temos um atributo associado a uma função,
  que por sua vez retorna um objeto, isso é necessário para garantir que o estado 
  será único por componente, porque a cada vez que a função data for chamada, ela
  retornará um objeto e cada objeto retornado possui sua própria referência de
  memória.

  nesse exemplo abaixo, o mesmo objeto, ou seja, um objeto com a mesma referência
  estaria sendo retornado, logo o estado seria o mesmo para todos os componentes.
  data : {
     ..
  }

  Abaixo nós temos definido o estado inicial do nosso componente.
   */
 data: function(){
    return {
      displayValue: '0', // indica o valor que será exibido na tela
      clearDisplay: false, // indica se o display deverá ser limpo ou não
      operation: null, // armazena a operação atual
      values: [0, 0], // armazena os valores da operação
      current: 0 // indica em qual índice do array estamos
    }
 },
    /*
      Registrando componentes externos dentro do componente
      Calculator.
     */
   components: {Button, Display},

   methods : {
      clearMemory(){
         /*
          Aqui nós estamos atribuindo o estado inicial 
          do componente ao objeto data, oque fará com
          que o objeto data volte ao estado inicial do componente.
          */
         Object.assign(this.$data, this.$options.data())
      },

      setOperation(operation){
        if (this.current === 0) {
            this.operation = operation
            this.current = 1
            this.clearDisplay = true
        } else {
           const equals = operation  === "="
           const currentOperation = this.operation

           try {
             this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`)
             if(isNaN(this.values[0]) || !isFinite(this.values[0])) {
                this.clearMemory()
              return
             }
           } catch(e) {
              this.$emit("onError", e)
           }

           this.values[1] = 0

           this.displayValue = this.values[0]
           this.operation = equals ? null : operation
           this.current = equals ? 0 : 1
           this.clearDisplay = !equals

        }
      },

      addDigit(n){
         if(n === "." && this.displayValue.includes(".")){
           return
         }

         const clearDisplay = this.displayValue === "0" 
         || this.clearDisplay == true

         const currentValue = clearDisplay ? "" : this.displayValue
         const displayValue = currentValue + n

         this.displayValue = displayValue
         this.clearDisplay = false

         if(n !== '.') {
           const i = this.current
           const newValue = parseFloat(displayValue)
           this.values[i] = newValue
         }


      },
   }
 }
</script>

<style>
  .Calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
  }
</style>