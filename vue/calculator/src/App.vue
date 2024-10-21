/*
 -------
  O App.vue representa o componente raíz da minha aplicação, ou seja,
  é nele que serão referenciados todos os outros componentes.
 -------
*/

/* Dentro da tag template ficará minha marcação HTML */
<template>
   <div id="app">
     <h1>Calculadora</h1>
     <Calculator/>
   </div>
</template>

/* Dentro da tag script ficará meu javascript */
<script>
import Calculator from "./main/Calculator"

  export default {
      components: { Calculator }
  }
</script>

/* Dentro da tag style ficará meu estilo css */
<style>
  @font-face {
     font-family: "RobotoMono";
     src: url("./fonts/RobotoMono-Thin.ttf");
  }

  * {
    font-family: "RobotoMono", monospace
  }

  body{
    margin: 0;
  }

  
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
  }
</style>