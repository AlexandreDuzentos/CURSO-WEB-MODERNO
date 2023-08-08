/*
 Notação ponto: é o sinal usado para acessar membros de uma função ou objeto em javascript
 A notação ponto está presente em toda linguagem javascript
*/
console.log(typeof console) // O console javascript é um Object
console.log(Math.ceil(5.4))

const obj1 = {}
obj1.firstName = "Alexandre"
obj1['first name'] = "Alexandre"

console.log(obj1.firstName)
console.log(obj1['first name'])

function Obj(nome){
    this.nome = nome // É um atributo público

    this.exec = function(){ // É um método público
        console.log("Exec...")
    }
}

const obj2 = new Obj("Janela")
console.log(obj2.nome)
obj2.exec()