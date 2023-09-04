/**
 *  Está a ser possível chamar a função antes de sua declaração, por que ela
 * foi declarada usando a notaçao function declaration.
 */
console.log(soma(5,9))

/**
 * function declaration
  A vantagem de usar a function declaration
  é que o interpretador do javascript carrega
  essas funções, deixando-as preparadas, antes do código
  ser executado, desse modo é possível chamar as funções antes
  da linha onde ela foi declarada.
 */
function soma(a, b){
   return a + b
}

// function expression
let subtracao = function(a, b){
    return a - b
}

// named function expression(pouco usada)
let mult = function mult(a, b){
    return a * b
}

