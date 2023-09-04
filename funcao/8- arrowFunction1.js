let dobro = function(a){
    return 2 * a
}

/*
 Uma função arrow também é anónima

 Características da função arrow: sintaxe curta, o this não varia, ou
 seja, aponta sempre para o mesmo local, que é o contexto em que função foi declarada

 Quando colocamos o corpo da função arrow, precisamos explicitar return
 */
dobro = (a) => {
    return 2 * a
}

/*
 Função arrow sem bloco associado(corpo) e com return implícito

 função arrow com um único parâmetro
 */
dobro = a => 2 * a

let ola = function(){
    return "Olá"
}

/*
 Função arrow sem parâmetros e com return inplícito
 */
ola = () => "olá"

/**
 * Função arrow com parâmetro opcional e com return inplícito
 */
ola = _ => `Ola ${_}`

console.log(ola("Alexandre"))
