let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) // true
comparaComThis(module.exports) // false


/** Fazendo o this dentro da funçao comparaComThis apontar para o objeto module.exports */
comparaComThis = comparaComThis.bind(module.exports)

/**Chamando a função comparaComThis com o seu this interno apontando para module.exports */
comparaComThis(global) // false
comparaComThis(module.exports) // true

/*
 No contexto de execução do node, o this dentro de uma função arrow não varia
 ou seja, ela aponta para o contexto de execução em que foi declarada, que no 
 caso é representado pelo objeto module.exports/exports.
 */
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

/**
 * A função bind não faz não muda a referência do this dentro
 * de uma arrow function.
 */
comparaComThisArrow = comparaComThisArrow.bind(global)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true