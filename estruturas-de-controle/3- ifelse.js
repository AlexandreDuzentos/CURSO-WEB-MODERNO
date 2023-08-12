const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log("Aprovado")
    } else; {
        /*
         Esse bloco de código não está associado ao else por que ele foi finalizado com o ponto
        e vírgula, transformando-se numa sentença de código, logo, ele sempre será executado.
        */
        console.log("Reprovado")
    }
}

imprimirResultado(9) // Aprovado e reprovado
imprimirResultado(5) // reprovado


const imprimirResultado2 = function(nota){
    if(nota >= 7) {
        console.log("Aprovado")
    } else {
        /*
         Esse bloco de código não está associado ao else por que ele foi finalizado com o ponto
        e vírgula, transformando-se numa sentença de código, logo, ele sempre será executado.
        */
        console.log("Reprovado")
    }
}

imprimirResultado2(6) // Reprovado
imprimirResultado2(8) // Aprovado

/**
 *  Pelo fato do javascript ser uma linguagem fracamente tipada, ele fará a comparação usando o operador
 * comparativo maior(>) de uma string com um número, como não é possível comparar ambos usando esse
 * operador, o resultado da comparação será resolvido para falso
 */
imprimirResultado2("Alexandre") // Reprovado


const imprimirResultado3 = function(nota){
    /*
      Quando não temos blocos de código associado ao if ou else, apenas uma sentenção de código fica associada aos mesmos
      as restantes serão executadas independentemente da condição, ou seja, sempre.
    */
    if(nota >= 7)  
        console.log("Aprovado")
     else 
        console.log("Reprovado")
}

imprimirResultado3(5)
imprimirResultado3(8)


 