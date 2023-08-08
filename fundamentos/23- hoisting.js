// Hoisting(içamento): é um comportamento padrão de mover as declarações para o topo, ocorre apenas com variáveis declaradas com o var
console.log("n1 = ", n1) // a variável n1 estará undefined ao invês de is not defined que seria o comportamento padrão
var n1 = 6
console.log("n1 = ", n1)

console.log("-------------------------")

// O efeito hoisting também dentro de funções
function teste(){
    console.log("n1 = ", n1)
    var n1 = 6
    console.log("n1 = ", n1)
}

teste()