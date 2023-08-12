/**
 * O break causa uma desvio de fluxo em estruturas de controle como switch, while, for.
 * O break não age em cima da estrutura if
 * 
 * O continue também causa um desvio de fluxo em estruturas de controle como: for e while.
 *  
 * desvio de fluxo: sair de um ponto, pular algumas linhas e ir para um outro ponto.
 * 
 * Não é encorajado o uso do break e continue.
 */

const notas = [10, 12, 18,14, 20, 17]
 
//for(i in notas){
   // if(i == 2){
        /**
         * o fluxo do programa será desviado para a chave de fechamento do laço mais próximo
         * que ele suporta, que no caso é o for e não do if,por que o break não atua em cima da
         * estrutura if
         */
       // break 
    //}
    //console.log(`${i} = ${notas[i]}`)

/**
 * o break desviará o fluxo para esse ponto(fechamento da chave do for), logo tudo o que está entre
 * o break e esse ponto não será executado e  a execução do for é interrompida
 */
//} 




for(y in notas){
    if(y == 2){
        /**
         * o fluxo do programa será desviado para a chave de fechamento do laço mais próximo
         * que ele suporta, que no caso é o for e não do if,por que o continue não atua em cima da
         * estrutura if
         */
        continue
    }

    console.log(`${y} = ${notas[y]}`)

/**
 * o continue desviará o fluxo para esse ponto(fechamento da chave do for), logo tudo o que está entre
 * o continue e esse ponto não será executado mas a laço continuará a ser executado nas próximas vezes
 */
}