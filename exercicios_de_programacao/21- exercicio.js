/**
 * Crie uma função que receba uma string por parâmetro e conte quantas palavras tem nela.
 * 
 * Considere que todas as palavras só são separadas por um espaço.
 */

function contePalavras(frase){
    let arrayPalavras = frase.split(" ")

    return arrayPalavras.length;
}

console.log(contePalavras("Sou uma frase"))
console.log(contePalavras("Me divirto aprendendo a programar"))
