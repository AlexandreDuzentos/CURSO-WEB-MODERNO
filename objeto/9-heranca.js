// Cadeia de protótipos(prototype chain)

/**
 * Criando um atributo dentro do último objecto(Object.prototype) de toda a cadeia de prototipos(prototype chain)
 */
Object.prototype.attr = "k"  // Evite esse tipo de manipulação, porque inpacta a cadeia toda de prototypes dos objetos, porque esse é o protótipo pai de todos os objetos
const avo = {attr1: "A"}
const pai = {__proto__:avo ,attr2: "b", attr4: "h"}
const filho = {__proto__:pai, attr3: "c", attr4:"d"}

/*
Quando é feito acesso a um atributo e ele não existe no objeto, ele é procurado por toda a
cadeia de prototypes(prototype chain) até ser encontrado, caso ele não exista é retornado undefined.
*/
console.log(filho.attr3, filho.attr2, filho.attr, filho.attr0)

/*
 Sombreamento: é um efeito que ocorre quando um mesmo atributo existe no objeto atual e no seu prototype,
 oque faz com que o atributo mais específico(do objeto atual) seja o usado.
*/
console.log(filho.attr4)

// O prototype do objecto filho já não aponta para o objeto Object.prototype, mas sim para o objeto pai
console.log(filho.__proto__ === Object.prototype)


const carro = {
    velAtual: 0,
    velMax: 200,  
    acelerarMais(delta){
         if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
         } else {
            this.velAtual = this.velMax
         }
    },
    status(){
        return `${this.velAtual}km/h  de  ${this.velMax}km/h`
    }
}


const ferrari = {
    modelo: "F4O",
    velMax: "324", // Shadowing, esse atributo irá sombrear o mesmo atributo no objeto de protótipo, ou seja, fará com que ele não seja "visto"
}

const volvo = {
    modelo: "v40",
    //sombreando método status do objeto de prototípo(prototype)
    status(){
       // A palavra super serve para referenciar o prototype desse objeto, que pode conter métodos e atributos
       return `${this.modelo}: ${super.status()}`
    }
}


// Estabelecendo uma relação de prototype entre dois objetos.
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(180)
console.log(volvo.status())


ferrari.acelerarMais(400)
console.log(ferrari.status())


