function criarProd(id, nome ,preco){
   
    return {
        id: id,
        nome: nome,
        preco: preco,
        desconto: 0.1

    }
}


console.log(criarProd(2, "TV", 400.90))


function criarProd2(id, nome, preco){
   
    return {
        id,
        nome,
        preco,
        desconto
    }
}