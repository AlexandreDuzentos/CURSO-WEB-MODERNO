/** Operador ... rest(agrupar)/spread(espalhar) */

// Usar rest com parâmetro da função
function soma(...numeros){
  let soma = 0

  numeros.forEach((num) => {
    soma += num
  })

  return soma
}


console.log(soma(2, 8, 9, 8))

// Usar spread com objeto
const pessoa = {nome: "Alexandre", idade: 20}
const clone = {ativo: true, ...pessoa}

// Usar spread com array
const grupoA = ["João", "Pedro", "Glória"]
const grupoFinal = ["Macabeu", ...grupoA, "Paulo"]

console.log(grupoFinal)