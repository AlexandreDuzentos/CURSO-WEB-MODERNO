/*
 É possível usar o operador de desestruturação com parâmetro de uma função
 evitando, desse modo usar a notação ponto dentro da função para acessar os membros do objecto
*/
function rand({min = 0, max = 10}){ 
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand({max : 50, min: 29}))
console.log(rand({min: 5})) // O valor máximo assumirá o valor padrão dentro do operador destructuring definido no parâmetro da função
console.log(rand({max: 30})) //O valor mínimo assumirá o valor padrão dentro do operador destructuring definido no parâmetro da função
console.log(rand({})) // O valor mínimo e máximo serão serão assumidos pelo valor padrão dentro do operador destructuring definido no parâmetro