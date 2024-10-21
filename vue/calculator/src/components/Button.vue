<template>
  <button class="button"
   @click="$emit('eventoPersonalizadoDoDesenvolvedor', label)"
    :class="{double: double, triple: triple, operation: operation}">
       {{ label }}
  </button>
</template>

<script>
   export default {
    /*
     Definindo as propriedades que podem ser passadas para o
     componente button e seus respectivos tipos.   
     */
     props: {
        label: {},
        operation: {type: Boolean},
        double: {type: Boolean},
        triple: {type: Boolean}
     }
   }
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
}

.button:active {
   background-color: #ccc;
}

button.double {
  grid-column: span 2;
}

button.triple {
  /*
   Da linha onde esse grid-item inicia(que é a 1), ele pulará três linhas para
   frente, para ocupar mais duas células.
    */
   grid-column: span 3;
}

button.operation {
   background-color: #fa8231;
   color: #fff;
}

button.operation:active {
  background-color: #fa8231cc;
}
</style>