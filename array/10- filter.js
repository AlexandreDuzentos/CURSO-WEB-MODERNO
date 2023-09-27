// Criando uma simulação do filter
Array.prototype.filter2 = function(callback){
    let novoArray = []

    for(let i = 0; i < this.length; i++){
       if(callback(this[i], i, this)){
          novoArray.push(this[i])
       }
    }

    return novoArray;
}


const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo plástico", preco: 18.99, fragil: false}
]

let fragil = p => p.fragil
let maiorQue500 = p => p.preco >= 500

let resultado = produtos.filter2(fragil).filter2(maiorQue500)

console.log(resultado)