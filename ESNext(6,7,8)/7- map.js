// É um objeto que contém pares de chaves-valor e lembra a ordem original da inserção das chaves
/**
 * A grande diferença entre o Map e o objeto é que o Map aceita qualquer tipo de dado como chave.
 */
const tecnologias = new Map()

// O método set da classe Map permite setar a chave e o valor dentro do objeto Map
tecnologias.set("React", {framework: true})
tecnologias.set("Vue",{framework: true} )

// O método get do objeto Map permite pegar os valores que foram setados dentro dele a partir da chave
console.log(tecnologias.get("React").framework)

const chavesVariadas = new Map([
    [function(){}, "funcao"],
    [{}, "objeto"],
    [123, "Numero"],
    [345.12, "Numero de ponto flutuante"]
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


// A função has testa de determinada chave está presente no Map
console.log(chavesVariadas.has(123))

// A função delete remove um elemento do Map
chavesVariadas.delete(123)

console.log(chavesVariadas.size)

chavesVariadas.set({}, "Object")

// O Map não admite repetição de chave,  o valor é subscrito.
chavesVariadas.set(345.12, "Numero de ponto flutuante 2")

console.log(chavesVariadas.get(345.12))

// O atributo size retorna o tamanho do Map
console.log(chavesVariadas.size)


