/**
 * A fim de criar um mecanismo de busca para a sua aplicação, você precisa iniciar criando uma função
 * para identificar palavras semelhantes.
 * 
 * Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um
 * array de strings. A função deverá filtrar as palavras do array que contém nelas a string do primeiro
 * parâmetro.
 */

function buscarPalavrasSemelhantes(palavra, arrayStrings){
    const arrayStrings2 = arrayStrings
    const palavra2 = palavra.split("")
    const newArray = []

    for(let i = 0; i < arrayStrings2.length; i++){
         for(let j = 0;  j < palavra2.length; j++){
              if(palavra2[j] == arrayStrings2[i].charAt(j)){
                 newArray.push(arrayStrings2[i])
                 break
              }
         }
    }

    return newArray
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++", "pycharm"]))

function buscarPalavrasSemelhantes2(inicio, palavras){
    const resultado = []

    for(let palavra of palavras){
       if(palavra.includes(inicio)){
          resultado.push(palavra)
       }
    }

    return resultado
}

console.log(buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]))