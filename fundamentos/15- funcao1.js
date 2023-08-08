// Função sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

// O JavaScript é uma linguagem muito flexível

// Essa chamada exibirá 13
imprimirSoma(5, 8)

/*
 Essa chamada exibirá NaN por que a função requer dois argumentos e apenas o primeiro foi passado
 A soma de 2 + undefined resulta em NaN
 argumentos obrigatórios e não passados, por padrão assumem undefined
*/
imprimirSoma(2)

/* Não será retornado qualquer erro nesse cenário, por que os dois argumentos que a função requer foram
 passados, os restante argumentos passados serão ignorados pelo javascript
*/
imprimirSoma(2, 10, 3, 9, 90, 5, 8)

/*
 Essa invocação da função retorna um NaN, Por que a função requer dois argumentos e nenhum deles
 foi passado, logo os parâmetros assumirão por padrão undefined e a soma entre dois valores undefined
 resulta em NaN
 */
imprimirSoma()

//Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,7))

console.log(soma(9))

/* Essa função retornará undefined, por que ela requer o primeiro argumento de forma obrigatória e ele 
não foi passado, logo assumirá undefined e a soma entre um valor numérico com o undefined retorna NaN */
console.log(soma())