const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasNovas = []

// Percorrendo um array sem o uso do callback
for(let i in notas){
    if(notas[i] < 7){
      notasNovas.push(notas[i])
    }
}

console.log(notasNovas)


// Percorrendo um array com o uso do callback
notasNovas = notas.filter((valor) => valor < 7)

console.log(notasNovas)