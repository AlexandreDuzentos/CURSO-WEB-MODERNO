/**
 * A fim de manter o calendário anual ajustado com o movimento de translação da terra, criou-se
 * os anos bissextos que têm 366 dias em vez de 365 dias presentes nos anos normais.
 * 
 * Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser múltiplo
 * de 100, exceto se também for múltiplo de 400.
 * 
 * Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se
 * ele é bissexto ou não.
 */

function anoBissexto(ano){
   if(ano % 4 == 0 && !(ano % 100 == 0) || ano % 400 == 0){
      return true
   }

   return false
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2100))