/*
 A ideia da fucionalidade tagged template é que você consiga processar uma template string dentro
 de uma função.
*/

/*
  O que estará dentro de valores serão as variáveis que foram interpoladas dentro da template string.
  Oque estará dentro de partes é o não foi interpolado dentro da template string.

  Tanto o que está dentro de valores como o que está dentro de partes virá em forma de array.

  Essa funcionalidade pode ser usada para aplicar uma máscara de valores monetários a valores numéricos
  da template string.
*/
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return "Outra string"
}

const aluno = "Alexandre"
const situacao = "Aprovado"
const idade = 20

console.log(tag `${aluno} está ${situacao} e tem ${idade}`)