const quaseArray = {0: "Paulo", 1: "Abraão", 2: "David", 3: "salomão"}

console.log(quaseArray)

Object.defineProperty(quaseArray, "toString", {
    value: function(){ return Object.values(this)},
    enumerable: false
})

// O objeto também permite o acesso aos seus atributos por meio da notação de colchetes
console.log(quaseArray[0])

console.log(quaseArray.toString())

