const { isNumber } = require("lodash")


function dolar(partes, ...valores){
      const resultado = []
      valores.forEach((valor, indice) => {
         valor = isNumber(valor) ? `$${valor.toFixed(2)}` : valor 
         
         resultado.push(partes[indice], valor)
      })

      return resultado.join("")

}

const preco = 29.99
const precoParcela = 11

console.log(dolar `1x de ${preco} ou 3x de ${precoParcela}`)

     