/**
 * Desenvolva uma função que receba como parâmetro um número de 1 até 10.Internamente, na função,
 * será gerado um valor aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi
 * igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns!",
 * O número sorteado foi o X. Se não for igual, retorne que pena! O número sorteado foi X. X é o nú
 * mero que foi sorteado. 
 */

function funcaoDaSorte(num){
   
    let valorSorteado = Math.floor(Math.random() * (10 - 1) + 1)
    
    if(valorSorteado == num){
        return `Parabéns! O número sorteado foi ${valorSorteado}`
    } else {
        return `Que pena! O número sorteado foi ${valorSorteado}`
    }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))