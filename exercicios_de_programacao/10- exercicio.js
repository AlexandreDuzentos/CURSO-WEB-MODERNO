/**
 * Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou
 * removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja
 * a sua referência de memória é a mesma.
 * 
 * Num projeto em que você está trabalhando, você foi designado a refatorar diversas funções, para
 * que façam copia de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos
 * indesejáveis em algumas situações devido as referências a objetos. Abaixo está a descrição de
 * uma dessas funções.
 * 
 * Você escreverá uma função que receberá um objeto como primeiro parâmetro e como segundo parâmetro
 * o nome de uma propriedade contida nesse objeto. Em seguida retornar um cópia desse objeto, sem
 * a propriedade específicado no segundo parâmetro.
 * 
 */

function removerPropriedade(objeto, propriedade){
    let obj = objeto 
    let obj2 = {}

    delete obj[propriedade]
    
    // O conteúdo do objeto obj será copiado para o objeto obj2 
    Object.assign(obj2, obj)

    return obj2
}

const obj1 = {a: 1, b: 2}
const obj2 = {id: 10, nome: "caneta", descricao: "Não preenchido"}


console.log(Object.is(removerPropriedade(obj1, "a"), obj1))
console.log(Object.is(removerPropriedade(obj2, "descricao"), obj2))
