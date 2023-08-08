/* Um operador de desestruturação extrai de uma estrutura(array, objeto)
 alguma coisa, ele foi criado na versão ES6(ECMASCRIPT 2015)

 Ele é um operador não clássico  em linguagens de programação.
*/

const person = {
    firstName : "Alexandre",
    lastName : "Duzentos",
    age : 20,
    endereco : {
        cidade : "luanda",
        municipio : "Talatona",
        Distrito : "Futungo",
        Bairro : "Kawelele",
    }
}

const {firstName: n, endereco: a} = person // Renomeando o nome dos atributos

const {PrimeiroNome, Country = "Angola"} = person

const {endereco : {cidade, municipio, Distrito, Bairro}} = person // Acessando atributos de dentro de um objecto

console.log(n, a)
console.log(PrimeiroNome, Country)
console.log(Bairro, municipio, cidade)

console.log("Yes")

