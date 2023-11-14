function gerarNumerosEntre(min, max, tempo){
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = Math.floor(Math.random() * (max - min) + min)
            resolve(aleatorio)
        }, tempo)
       
    })
        
}

function gerarVariosNumerosAleatorios(){
    /*
      A função all da classe Promise recebe um array como argumento e esse array recebe várias
      promises, essa função tem a função de chamar todas as promises passadas para ela de forma paralela
      e retorna um objeto da classe Promise.

      A callback passada dentro da função then da classe Promise será apenas chamada quando todas
      as promises passadas para a função all forem resolvidas.
    */
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1,60, 300)
    ])
}


/*
 A função time inicia um cronômetro que você pode usar para monitorar quanto tempo uma operação
 leva. Cada cronômetro recebe um label, que nada mais é do que um identificador único.
*/
console.time("promise")

gerarVariosNumerosAleatorios()
   .then((numerosAleatorios) => console.log(numerosAleatorios))
   .then(() => {
       /*
        Quando a função timeEnd é chamada, o tempo que se passou desde que o cronômetro iniciou
        em milissegundos será exibido.
       */
       console.timeEnd("promise")
   })
 