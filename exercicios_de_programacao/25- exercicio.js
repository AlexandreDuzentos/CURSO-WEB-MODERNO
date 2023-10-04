/**
 * Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde
 * ao objeto recebido, porém com as posições das chaves e valores invertidas.
 */

function inverter(obj){
    const newObj = {}
  
    for(let chave in obj){
        let valor

        valor = chave

        newObj[obj[chave]] = valor
    }

    return newObj
}

const obj = {a: 1, b: 2, c: 6}

console.log(inverter(obj))



