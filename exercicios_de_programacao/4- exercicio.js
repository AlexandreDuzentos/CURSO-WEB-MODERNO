/**
 * Desenvolva uma função que receba dois parâmetros, um é a quantidade de horas trabalhadas por um
 * funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a String
 * "Salário igual a R$ X", em que x é o quanto o funcionário ganhou no mês.
 */

function calcularSalario(qtdHorasTrabalhadas, salarioPorHora){
   return `Salário igual a R$ ${qtdHorasTrabalhadas * salarioPorHora}`
}

console.log(calcularSalario(150 , 40.5))