/*
 O fato da função não receber nenhum parâmetro não significa que argumentos não possam
 ser passados e posteriomente recuperados para realizar alguma lógica
*/
function soma(){
  /*
   Toda função possui um array interno chamado arguments, que possui
   todos os valores passados como argumento para a função
  */
  let soma = 0
  for(n in arguments){
     soma += arguments[n]
  }

  return soma
}

console.log(soma(2,4,6,7,8,9,2,3,5))
console.log(soma(2,3,4,5,6,7, "Yes"))
console.log(soma('a', "b", "c"))

/** Realizar calculos entre tipos de dados diferentes, com exeção uma operação de soma,
 * que concatenará, retorna um NaN
 * 
 * EX.: 2 - "teste" = NaN
 * EX.: 2 + "teste" = 2teste
 */


