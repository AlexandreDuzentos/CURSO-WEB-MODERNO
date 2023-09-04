/**
 *  02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 *  Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 *  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 *  ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 *  triângulo).
 */

function classificacaoTriangulo(lado1, lado2, lado3){
    let classificacao;

    if (lado1 === lado2 && lado1 === lado3 && lado3 === lado2){
      classificacao = "Equilátero"
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado3 !== lado2){
      classificacao = "Escaleno"
    } else {
        classificacao = "Isósceles"
    }

    return classificacao
}


console.log(classificacaoTriangulo(2,2,2))
console.log(classificacaoTriangulo(2,2,1))
console.log(classificacaoTriangulo(2,3,4))
