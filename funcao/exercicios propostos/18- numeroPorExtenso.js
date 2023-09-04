/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
   switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

function escreverNumeroPorExtenso(numeroEmAlgarismo){
    
    switch(numeroEmAlgarismo){
        case 0:
            console.log("zero")
            break
        case 1:
            console.log("um")
            break
        case 2:
            console.log("dois")
            break
        case 3:
            console.log("três")
            break
        case 4:
            console.log("quatro")
            break
        case 5:
            console.log("cinco")
            break
        case 6:
            console.log("seis")
            break
        case 7:
            console.log("sete")
            break
        case 8:
            console.log("oito")
            break
        case 9:
            console.log("nove")
            break
        case 10:
            console.log("dez")
            break
        default:
            console.log("Número fora do intervalo!")
    }
}

escreverNumeroPorExtenso(0)
escreverNumeroPorExtenso(1)
escreverNumeroPorExtenso(2)
escreverNumeroPorExtenso(3)
escreverNumeroPorExtenso(4)
escreverNumeroPorExtenso(5)
escreverNumeroPorExtenso(6)
escreverNumeroPorExtenso(7)
escreverNumeroPorExtenso(8)
escreverNumeroPorExtenso(9)
escreverNumeroPorExtenso(10)
escreverNumeroPorExtenso(12)
