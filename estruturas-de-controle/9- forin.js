/** O forin pode ser usado em cima de um objeto ou de um array */

let grades = [12.8, 11,4,7.8, 10.2, 12.6]

/**
 * o i representa o índice do array
 * o notas representa o array em si
 */
for(let i in grades){
   console.log(i, grades[i])
}


const person = {
    christiaName: "Alexandre",
    middleName: "Baptista júlio",
    lastName: "Duzentos",
    age: 20,
    peso: 70

}

/**
 * O info representa a chave ou identificador
 * o person representa o objecto em si
 */
for(let info in person){
    console.log(`${info} = ${person[info]}`)
}
