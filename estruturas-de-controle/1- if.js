/**
 * O if e else if são estruturas condicionais e estruturas condicionais são estruturas de controle
 * que permitem que um bloco de comandos somente seja executado dependendendo de uma condição
 * 
 * O bloco associado ao if são as chaves({})
 */

function resultadoExame(nota){
    /*
      expressão relacional(comparativa) passada como condição para execução do bloco associado ao if
      se a condição for verdadeira, o bloco associado ao if será executado
     */
    if(nota >= 10){
        console.log(`Aluno aprovado com ${nota} valores`)
    }
}

resultadoExame(11)

function seForVerdadeEuFalo(valor){
    /*
     valor passado como condição para execução do bloco associado ao if
     se o valor presente dentro do if resolver para verdadeiro o bloco de comandos associado
     ao if será executado

     de forma explícita é como se tivessemos dentro do if a seguinte expressão relacional valor === true
    */
    if(valor){
        console.log(`É verdade ${valor}`)
    }
}

// Os falsos
seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)


// Os verdadeiros
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(Infinity)
