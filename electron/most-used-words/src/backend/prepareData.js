export default rows => {
    return new Promise((resolve, reject) => {
         try {
             const data = rows
                          .filter(filterValid)
                          .map(removePunctuation)
                          .map(removeTags)
                          .reduce(mergeRows)
                          .split(" ")
                          .map(word => word.toLowerCase())

             resolve(data)
         } catch(e) {
             reject(e)
         }
    })
}

/* 
  Função responsável por filtrar rows válidas - ela removerá rows que contenham
  números, espaços em branco e o texto "-->" dentro dela
*/
function filterValid(row){
   const notNumber = !parseInt(row.trim()) // testando se uma row não é um número
   const notEmpty = !!row.trim() // testando se uma row não é vazia
   const notInterval = !row.includes("-->") // testando se uma row não tem o -->

   return notNumber && notEmpty && notInterval
}

/* Função responsável por remover os sinais de pontuação de cada row */
function removePunctuation(row){
   return row.replace(/[,?!:;.'()-]/g, "")
}

/* Função responsável por remover tags de cada row */
function removeTags(row){
   return row.replace(/(<[^>]+)>/g, "").trim()
}

/* Função responsável por mesclar as rows todas em uma única string */
function mergeRows(fullText, rowText){
    return `${fullText} ${rowText}`
}