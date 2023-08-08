function rand([min = 5, max = 10]){
    if(min > max) [max, min] = [min, max]
     let valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

console.log(rand([10, 20]))
console.log(rand([20, 10]))
console.log(rand([7])) // O valor máximo assumirá o valor padrão dentro do operador destructuring definido no parâmetro da função
console.log(rand([, 70])) //O valor mínimo assumirá o valor padrão dentro do operador destructuring definido no parâmetro da função
console.log(rand([])) // O valor mínimo e máximo serão serão assumidos pelo valor padrão dentro do operador destructuring definido no parâmetro