const _ = require("lodash")

/*
 O setInterval é uma função que recebe uma callback, e um intervalo de tempo como parâmetro,
 a callback é chamada de forma recorrente, toda vez que o intervalo de tempo passado no segundo parâmetro
 passa.
 
*/

setInterval(() => {
   console.log(_.random(1, 1000))
}, 2000)