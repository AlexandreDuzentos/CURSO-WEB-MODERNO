const notas = [12, 17, 9, 3, 18 ,20] // array unidimensional
const idades = [[19, 20, 56, 67], [12, 56, 89, 1]] // array bidimensional

const [nota1, nota2, nota3, nota4, nota5, nota6] = notas // Desestruturando todos elementos do array

/* Desestruturando alguns elementos do array, outros sendo ignorado, a vírgula(,)  serve para ignorar determinadas posiçòes no array  */
const [notta1, ,notta3, notta4, , notta6] = notas  // posições ignoradas: 1 e 4
const [, nottta2, nottta3, , nottta5, , nottta7] = notas // posições ignoradas: 0, 3 e 5

console.log(nota1, nota2, nota3, nota4, nota5, nota6)
console.log(notta1, notta3, notta4, notta6)
console.log(nottta2, nottta3, nottta5, nottta7)


const [,[,i2, ,i4]] = idades
console.log(i2, i4)

const [[, j1, j2, , j3], [c1, c2, , ,]] = idades
console.log(j1, j2, j3)
console.log(c1, c2)