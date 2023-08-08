/**
 * igualdade de valor(==): compara apenas os valores e não os tipos
 */
console.log("01)", "1" == 1)

/**
 * igualdade de valores e de tipo(===) também chamada de igualdade estrita: compara o valor e os tipos
 */
console.log("02)", "1" === 1) 


/**
 * diferença de valores(!=): compara apenas o valore e não os tipos
 */
console.log("03", "1" != 1) 

/**
 * diferença de valores e tipos de dados(!==) também chamada diferença estrita: compara tanto os
 * valores quanto os tipos de dados
 */
console.log("04)", "1" !== 1)

console.log("05)", 6 > 5)
console.log("06)", 6 < 5)
console.log("07)", 6 >= 5)
console.log("08)", 6 <= 5)

/**
 * O valor zero(0)  passado como argumento para a função(constructor da classe) significa que a data
 * será 1 de janeiro de 1970
 */
const data1 = new Date(0)
const data2 = new Date(0)

/* 
  Em ambas comparações, a quantidade de iguais não fará diferença no resultado, pois quando comparamos
  duas variáveis do tipo referência, o valor da referência é comparado, e duas instâncias diferentes não
  possuem a mesma referência
  */
console.log("09", data1 == data2)
console.log("10", data1 === data2)

console.log("11)", data1.getTime() == data2.getTime())
console.log("12)", data1.getTime() === data2.getTime())

console.log("13)", undefined == null)
console.log("14)", undefined === null)

console.log(`Data 1: ${data1}`)
console.log(`Data 2: ${data2}`)
