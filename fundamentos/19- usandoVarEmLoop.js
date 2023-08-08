
for(var i = 0; i < 5; i++){
    console.log(`Dentro: ${i}`)
}

/* Nesse cenário, apenas o útimo valor é impresso fora, por que o programa chega apenas nessa alínea quando a loop é concluído, e
quando isso acontece, o valor de i é 5 */
console.log(`Fora: ${i}`)