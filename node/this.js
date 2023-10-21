// This fora de uma função
console.log(global === this)
console.log(this === module)


console.log(this === module.exports)
console.log(this === exports)


/** This dentro de uma função */
function logThis(){
    console.log("Dentro de uma função")

    // false
    console.log(this === exports)

    // false
    console.log(this === module.exports)

    // true
    console.log(this === global)
}

logThis()

let testeThis = () => {
    console.log("this dentro de um função arrow")
    
    // true
    console.log(this === module.exports)
    
    // true
    console.log(this === exports)

    // false
    console.log(this === global)
}

testeThis()