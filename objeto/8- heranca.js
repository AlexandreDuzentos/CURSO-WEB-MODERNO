/**
 *  Em javascript todo objeto tem uma referência para um prototype, que é o seu objeto pai,
 *  caso eu tente acessar um atributo que não esteja no objeto filho, ele procurará pelo atributo
 *  no seu prototype.
 * 
 * O prototype de cada objeto aponta para object.prototype.
 * 
 * O atributo prototype só está disponível dentro de uma função.
 * Toda função tem o atributo prototype
 * 
 * Os objetos não têm o atributo prototype, mas têm um prototype, que é seu objeto pai.
 * 
 * O atributo __proto__ serve para acessar o prototype de um objeto.
 * 
 * Dentro de todo objeto temos um atributo __proto__ que aponta para o objeto pai do objeto em questão e
 * também para Object.prototype.
 * */

const volvo = {
    modelo: "v40",
    velMax: 200
}

const ferrari = {
   modelo: "f40",
   velMax: 340
}


// O atributo __proto__ apontará para o objeto pai do objeto a partir do qual ele foi acessado.
console.log(ferrari.__proto__)


/*
 O atributo __proto__ também aponta para Object.prototype que é o objeto mais alto na hierárquia de
 prototypes.
 */
console.log(ferrari.__proto__ === Object.prototype)

// O Object.prototype é um objeto.
console.log(typeof Object.prototype)


/*
 O prototype de Object.prototype é null, por que ele é o prototype mais alto nas hierárquia de
 prototypes
 */
console.log(Object.prototype.__proto__)

function meuObjeto(){}

console.log(typeof meuObjeto)

// O atributo prototype de uma função criada por mim aponta para um objeto vazio
console.log(meuObjeto.prototype)
 