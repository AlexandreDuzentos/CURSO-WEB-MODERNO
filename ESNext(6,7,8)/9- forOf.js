// O for of itera directamente em cima dos valores, quer seja numa palavra, num array ou num Map.

for(let letras of "Alexandre"){
    console.log(letras)
}

const assuntosEcma = ["Map", "Set", "Promise", "Async await"]

// O for in itera directamente em cima dos índices
for(let i in assuntosEcma){
    console.log(assuntosEcma[i])
}


// O for of itera directamente em cima dos valores e não dos índices
for(let assunto of assuntosEcma){
    console.log(assunto)
}


const assuntosMap = new Map([
    ["Map", {abordado: true}],
    ["Promise", {abordado: false}],
    ["Async Await", {abordado: false}],
    ["Set", {abordado: true}]
])

// Percorrendo tanto a chave quanto o valor do Map
for(let assunto of assuntosMap){
    console.log(assunto)
}


// Percorrendo apenas as chaves do Map
for(let assunto of assuntosMap.keys()){
    console.log(assunto)
}


// Percorrendo apenas os valores do Map
for(let assunto of assuntosMap.values()){
    console.log(assunto)
}


// Desestruturando o array de assuntosMap, afim de acessar a chave e o valor.
for(let [ch, vl] of assuntosMap){
   console.log(ch, vl)
}

const nomes = ["Paulo", "Macabeu", "Mateus", "Franscisco"]
const set = new Set(nomes)


// Percorrendo um Set usando o for of
for(let nome of set){
    console.log(nome)
}


// O for Of também percorre arrays.
for(let nome of nomes){
    console.log(nome)
}
