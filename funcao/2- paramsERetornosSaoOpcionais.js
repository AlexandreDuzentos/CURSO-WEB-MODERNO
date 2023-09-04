function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor d área acima do permitido = ${area}`) // retornos são opcionais em funções
    } else {
        return area
    }
}

console.log(area(2, 8))
console.log(area(12, 6))

// Os argumentos que não tiverem parâmetros correspondentes serão ignorados
console.log(area(2, 5, 7, 8, 2, 4))

/** 
 * Parâmetros não passados assumem undefined
 * operações com variáveis que possuem o valor undefined resultam em NaN(not a number)
 * */
console.log(area()) 
console.log(area(4))