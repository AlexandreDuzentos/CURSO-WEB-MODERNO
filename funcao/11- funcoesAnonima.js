const soma = function(x, y){
    return x + y
}

// O terceiro parâmetro dessa função é um função, que possui como valor padrão outra função
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 8)
imprimirResultado(2, 8, soma)

imprimirResultado(2, 8, function(x, y){
    return x * y
})

imprimirResultado(2, 8, function(x, y){
    return x - y
})

imprimirResultado(3, 9, (x, y) => x * y)
imprimirResultado(3, 9, (x, y) => {
    return x * y
})

const pessoa = {
    /** Função anónima dentro de um objeto */
    falar: function(){
        console.log("Opa!")
    }
}

pessoa.falar()