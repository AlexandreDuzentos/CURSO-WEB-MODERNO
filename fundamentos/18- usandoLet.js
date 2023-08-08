let nome = "Alexandre"

{
    let nome = "Xande"
    console.log(`Dentro: ${nome}`)
}

// Variáveis declaradas com a palavra reservada let têm escopo global,  de bloco e de função
console.log(`Fora: ${nome}`)


const raca = "negra"

{
    const raca = "branca"
    console.log(raca)
}

// Variáveis declaradas com a palavra reservada const têm escopo global, de bloco e de função
console.log(raca)