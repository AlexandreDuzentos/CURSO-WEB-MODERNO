const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco":3.90}',
    '{"nome": "caneta", "preco": 7.50}'
]

// Desafio: retornar um array apenas com os preços
let paraObjeto = json => JSON.parse(json)
let preco = obj =>  obj.preco

const arrayPrecos = carrinho.map(paraObjeto).map(preco)

console.log(arrayPrecos)