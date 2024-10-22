<template>
   <div class="pill" :style="{backgroundColor: amountColor}">
       <span class="word">{{ word }}</span>
       <span class="amount" :style="{backgroundColor: amountColor}">{{ amount }}</span>
   </div>
</template>

<script>

export default {
    props: ["word", "amount"],
   
       /*
          propriedade computada responsável por atribuir cores
          a pills de acordo com a quantidade de ocorrências de
          uma palavra nela.
         */
      computed:{
        amountColor(){
            if(this.amount > 1000){
                return "#ff061a";
            } else if (this.amount > 700){
                return "#ff6221"
            } else if (this.amount > 500){
                return "#ff9e31"
            } else if (this.amount > 250){
                return "#f2d040"
            } else if (this.amount > 100){
                return "#00d13c"
            } else if (this.amount > 50){
                return "#0073c3"
            } else {
                return "#9175a1"
            }
        }
    }
}

</script>

/**
  A propriedade scoped indica que o estilo presente dentro
  da tag style será aplicado apenas para o componente atual.
 */
<style scoped>
  .pill {
    margin: 10px;
    height: 55px;
    width: fit-content; /* O valor fit-content faz com que largura do elemento seja a largura do conteúdo dentro dele */
    border-radius: 35px;
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .pill .word {
     margin-left: 15px;
  }

  .pill .amount {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin: 10px;
    padding: 5px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>