<template>
   <div id="app">
       <h1>Problema de montyHall</h1>
       <div class="form">
        <!--
         O number associado ao v-model indica que o valor do meu
         input será lido como um valor numérico e não String, isso
         ajuda a evitar conversões futuras.
         -->
           <div v-if="!started">
               <label for="portsAmount">Quantas portas?</label>
               <input type="text" id="portsAmount"
                size="3"
                v-model.number="portsAmount"
                >   
           </div>
           <div v-if="!started">
              <label for="selectedPort">Qual porta é premiada?</label>
              <input type="text" id="selectedPort" size="3"
               v-model.number="selectedPort">
           </div>

           <button v-if="!started" @click="started = true">Iniciar</button>
           <button v-if="started" @click="started = false">Reiniciar</button>
       </div>
      <div id="doors" v-if="started">
        <!--
        Cada elemento gerado pelo v-for precisa de uma propriedade chamada key, com
        um valor único para identifica-lo, isso serve para que o vue possa encontrar
        os elementos de uma forma muito mais otimizada dentro da DOM.
        -->
           <div v-for="i in portsAmount" :key="i">
              <Door :hasGift="i == selectedPort" :number="i" />
           </div>
      </div>
   </div>
</template>

<script>
  import Door from "./components/Door.vue"

  export default {
     /** 
      * Nomeando um componente, essa é uma boa prática, pois ajuda
      * a ver em qual componente se encontra o erro na hora de depurar o
      * código.
      */
      name: "App",
      components: { Door },
      data: function(){
         return {
            started: false, // indica se o jogo está inicializado ou não
            portsAmount: 3, // Quantidade de portas
            selectedPort: null // id da porta selecionada
         }
      }
  }
</script>

<style>

* {
    box-sizing: border-box;
    font-family: "Montserrat";
}


body {
    color: #fff;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

div#doors {
 align-self: stretch;
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
    

}
</style>