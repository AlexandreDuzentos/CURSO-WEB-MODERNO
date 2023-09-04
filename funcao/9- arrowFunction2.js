function pessoa(){  
   this.idade = 0

   /**O this dentro de uma função arrow não varia de acordo com a forma que a função
    * arrow é chamada, o this aponta sempre para o mesmo local, que é o contexto léxico
    * em que a função foi declarada.
    */
   setInterval(() => {
      this.idade++
      console.log(this.idade)
   }, 2000)
}

pessoa()