// Nessa aula falaremos sobre o atributo prototype da função

const person = {
    raca: "Negra",
    cor_olhos: "castanho"
}

function meuObjeto(){}

console.log(meuObjeto.prototype)


const obj1 = new meuObjeto
const obj2 = new meuObjeto

// Dois objetos criados a partir de uma mesma função construtora apontam para o mesmo prototype.
console.log(obj1.__proto__ === obj2.__proto__)

/*
 Quando eu crio um objeto a partir da função de uma função construtora, esse objeto aponta para o mesmo
 lugar que meuObjeto.prototype
*/
console.log(meuObjeto.prototype === obj1.__proto__)


// Criando atributos e funções dentro do prototype da função meuObjeto
meuObjeto.prototype.nome = "Alexandre"
meuObjeto.prototype.falar = function(){
    // O this aqui aponta para o prototype da função meuObjeto
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

console.log("Novo teste..........")
meuObjeto.prototype.person = person

// Acesando um atributo do obj1, que recebe um objeto.
console.log(obj1.person.raca)

/**
 *  O atributo __proto__ serve para referênciar o prototype de um objeto ou de uma função, o
 * prototype de todo objeto aponta para Object.prototype, e o prototype de uma função aponta para
 * Function.prototype.
 * 
 * O atributo prototype da função serve para acessar o prototype da função, oque me permite incluir
 * atributos e funções dentro do prototype da função.
 * */

// Acessando um atributo do obj1, que foi criado no prototype da função meuObjeto
console.log(obj1.nome)

// Acessando uma função do obj1, que foi criado no prototype da função meuObjeto
obj1.falar()


// Modificando o valor do atributo nome que foi criado no prototype da função meuObjeto
obj1.nome = "Paulo"

obj1.falar()


// Resumindo a loucura
console.log(new meuObjeto().__proto__ === meuObjeto.prototype)


// O prototype de toda função aponta para Function.prototype
console.log(meuObjeto.__proto__ === Function.prototype)

// O object.prototype é o último objeto na cadeia de prototypes, ele aponta para null
console.log(Object.prototype.__proto__)

