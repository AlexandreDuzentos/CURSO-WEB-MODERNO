const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

// O axios é um cliente HTTP, ele faz requisições para obter informações de recursos remotos.
const axios = require("axios")

let mulheresChinesas = (funcionario) => funcionario.genero == "F" && funcionario.pais == "China"
let menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// Fazendo uma requisição HTTP usando o método get.
axios.get(url).then((response) => {
    let funcionarios = response.data

    let resultado = funcionarios.filter(mulheresChinesas).reduce(menorSalario)

    console.log(resultado)
   
})









