/* No javascript vários outros valores, além de true e false resolvem para booleano */

let isAtivo = true

console.log(isAtivo)

isAtivo = false
 
console.log(isAtivo)

/* 
  Usamos a exclamação(!) também conhecida por negação, para fazer um determinado valor não originalmente booleano ser resolvida para booleano
  Em contextos como uso de uma estrutura de controle, um valor pode também assumir um valor booleano
 */

  // A segunda exclamação mata o efeito da primeira, voltando assim o valor ao seu estado booleano inicial
  isAtivo = 1
  console.log(!!isAtivo)


  console.log("Os verdadeiros...")
  console.log(`3: ${!!3}`)
  console.log(`-1: ${!!-1}`)
  console.log(`' ': ${!!' '}`)
  console.log(`[]: ${!![]}`)
  console.log(`{}: ${!!{}}`)
  console.log(`Infinity: ${!!Infinity}`)
  console.log(!!(isAtivo = true))

  console.log("Os falsos...")
  console.log(`0: ${!!0}`)
  console.log(`'': ${!!''}`)
  console.log(`null: ${!!null}`)
  console.log(`NaN: ${!!NaN}`)
  console.log(`undefined: ${!!undefined}`)
  console.log(!!(isAtivo = false))

  // Uma valor pode ser convertida para verdadeiro ou falso dependendo do contexto
  console.log('Para finalizar...')
  console.log(!!('' || null || 0 || NaN || " "))
  console.log('' || null || 0 || NaN || "Alexandre")
  
  let age
  console.log(age || 20)