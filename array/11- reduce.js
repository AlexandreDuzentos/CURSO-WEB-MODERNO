const alunos = [
    {nome: "Jõao", nota: 7.3 , bolsista: false},
    {nome: "Maria", nota: 9.3, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true}
]


let notas = obj => obj.nota


let resultado = alunos.map(notas).reduce((acumulador, valorAtual) => {
   console.log(acumulador, valorAtual)

   // O valor do acumulador provém do valor retornado pela callback passada como parâmetro.
   return acumulador + valorAtual

   /** Quando é passada um valor inicial como segundo argumento, o valorAtual se inicia com
    *  o primeiro elemento do array, caso contrário, se inicia com o segundo elemento do array
    */
},10)