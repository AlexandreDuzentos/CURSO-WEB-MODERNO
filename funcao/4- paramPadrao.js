// Estratégia 1 para gerar valor padrão(usar o operador ou(||))
function soma1(a, b, c){
   a = a || 1
   b = b || 2
   c = c || 3

   return a + b + c  
}

console.log(soma1(), soma1(3), soma1(1, 2, 3))
 
/* comportamento indesejado ao usar o operador ou(||) para trabalhar com valor padrão valor */
console.log(soma1(0, 0, 0))

//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a!= undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(23), soma2(1, 2, 3))

// Valor padrão do ES2015
function soma3(a = 9, b = 89, c = 10){
   return a + b + c
}

console.log(soma3(), soma3(3), soma3(1 ,2 ,4))
