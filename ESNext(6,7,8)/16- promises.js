function gerarNumerosEntre(min, max){
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const aleatorio = Math.floor(Math.random() * (max - min) + min)
        resolve(aleatorio)
    })
        
}

// Ambas as chamadas de função realizam a mesma tarefa.
gerarNumerosEntre(10, 30).then(console.log)
gerarNumerosEntre(10, 30).then((valorAleatorio) => console.log(valorAleatorio))

gerarNumerosEntre(0, 5)
   .then((valorAleatorio) => valorAleatorio * 10)
   .then((valorAleatoriox10) => console.log(`O valor gerado foi ${valorAleatoriox10}`))