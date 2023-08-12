const imprimirResultado = function(nota){
   
    /**
     *  Switch é uma estrutura de controle, na qual temos várias opções de fluxo que sua execução
     *  depende do valor de uma variável.
     * 
     * A estrutura de controle switch não permite trabalhar com intervalos de valores.
     */

    // A função floor do objeto Math arredonda um valor para baixo
    switch(Math.floor(nota)) {
         case 10:
         case 9:
            console.log("Quadro de honra!")
            break  // O break serve para dirigir o fluxo de execução do código para fora das chaves associadas ao switch
        case 8: 
        case 7:
            console.log("Aprovado!")
            break
        case 6: case 5: case 4:
            console.log("Recuperação!")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado!")
            break
        case 6.9:
            console.log("Teste número real!")
            break
        default:
            console.log("Nota inválida")
    }
    console.log("Fim")
}

imprimirResultado(10)
imprimirResultado(6.9)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)

