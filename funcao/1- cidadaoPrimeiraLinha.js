/*
 Função em Javscript é first class Object or first class citzen, em português,
 objeto de primeira linha ou ordem  ou cidadão de primeira linha ou ordem.

 Isso significa que funções podem, por exemplo, ser passadas como parâmetro de 
 métodos, bem como retornadas como resultado de métodos.

 Higher order functions - funções de alta ordem: funções são tratadas como
 dados no javascript, por isso, recebem esse nome.

 função é tratada como um dado no javascript, embora seja especial, pelo 
 fato de ser executavel, o que traz consigo uma grande flexibilidade no
 seu uso.
 
 Retornos são opcionais em funções no javascript.
 */

 // Criar função de forma literal
 function fun() { }

 // Armazenar em uma variável(função anónima)
 let fun2 = function(){}

 // Armazenar em um array
 let array = [function(a, b){return a + b}, fun, fun2]

 console.log(array[0](7, 12))

 // Armazenar em um atributo de objeto uma função
const obj = {}
obj.soma = function(n1, n2){return n1 + n2}

console.log(obj.soma(12,67))

// Passar função como parâmetro
function run(fun){
    fun()
}

run(function fun(){console.log("Executando...")})


 // Quando uma função não retorna nada, ela por padrão retorna undefined
 console.log(fun())

 // Uma função pode retornar ou conter um função
function soma(a, b){
    return function(c) {
        return a + b + c
    }
}

console.log(soma(4, 5)(7))