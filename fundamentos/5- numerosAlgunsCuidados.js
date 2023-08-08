console.log(7 / 0) // Divisão por 0 não retorna um erro, mas sim, o tipo infinity

// É possível realizar calculos(/,-, *) entre uma string e um número ou entre strings
console.log("10.6" / 5)
console.log("10" - 5)
console.log("10" * 5)

console.log("10" + 5) // não ocorrerá uma soma, mas sim, uma concatenação

/* O resultado de operações entre números de ponto flutuante podem não precisos,
  devido a especificação usada pelo IEEE para operações com números de ponto flutuante
 */
console.log(0.1 + 0.7)

console.log(10.987.toFixed(2)) // é possível chamar a função toFixed a partir de valores literais

