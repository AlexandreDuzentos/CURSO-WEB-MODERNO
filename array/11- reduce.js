const alunos = [
    {nome: "Jõao", nota: 7.3 , bolsista: false},
    {nome: "Maria", nota: 9.3, bolsista: true},
    {nome: "Maria", nota: 9.3, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true}
]


let notas = obj => obj.nota


let resultado = alunos.map(notas).reduce((acumulador, valorAtual) => {
   console.log(acumulador, valorAtual)

   // O valor do acumulador provém do valor retornado pela callback passada como parâmetro para a função reduce.
   return acumulador + valorAtual

   /** Quando é passada um valor inicial como segundo argumento, o valorAtual se inicia com
    *  o primeiro elemento do array, caso contrário, se inicia com o segundo elemento do array,
    *  e o acumulador se inicia com o valor do valor inicial e o valorAtual
    * se inicia com o valor do segundo elemento do array, e o acumulador
    * como o primeiro elemento do array.
    */
},10)

const sale = {
    name: "samsumg galaxy a55",
    price: 2540.9,
    qtde: 3
}


const group = {}

/*
if(!group.hasOwnProperty(sale.name)){
    group[sale.name] = {
        name: sale.name,
        value: sale.price * sale.qtde 
    }
}

console.log(Object.values(group))
*/
