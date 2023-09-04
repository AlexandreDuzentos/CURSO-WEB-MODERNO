
function aumento(planoTrabalho, salarioAtual){
    let salarioNovo
    switch(planoTrabalho){
        case "A":
            salarioNovo = salarioAtual + (10/100 * salarioAtual)
          break
        case "B":
            salarioNovo = salarioAtual + (15/100 * salarioAtual)
          break
        case "C":
            salarioNovo = salarioAtual + (20/100 * salarioAtual)
          break
        default:
            salarioNovo = "Plano de trabalho inválido!"
    }

    return salarioNovo
}

console.log(aumento("A", 250000))
console.log(aumento("B", 250000))
console.log(aumento("C", 250000))
console.log(aumento("K", 250000))