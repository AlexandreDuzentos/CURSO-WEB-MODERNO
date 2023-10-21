/**
 * Dentro do node nós temos algumas constantes e objetos disponíveis globalmente, algumas dessas
 * constantes é a __dirname, __filename, nos objetos temos global e o process.
 * 
 * A objeto process nos permite ler dados do teclado(entrada padrão) do computador e imprimir dados na 
   no monitor(saída padrão) do computador.
 */

   /*
     A propriedade process.argv retorna um array contento os argumentos da linha de comando passados
     quando o processo do node js foi lançado.
   */

     // Testando se o índice que virá no array da propriedade process.argv existe.
   const anonimo = process.argv.indexOf("-a") !== -1

   if(anonimo){
      // stdout - standard output
      process.stdout.write("Fala anônimo!\n") // escrevendo dados na saída padrão do computador.
      process.exit() // Matando o processo aberto na escrita.
   } else {
      process.stdout.write("Informe o seu nome: ")

      /*
        stdin - standard input

        O evento on data ocorre quando o usuário entra com algum dado no programa a partir do terminal
        Quando o evento on data ocorrer a callback passada como segundo argumento
        será chamada e para ela passada os dados entrados pelo usuário.
     */ 
      process.stdin.on("data", data => {
         // o /n estará nos dados passados pelo usuário, por conta da quebra de linha no final da digitação.
         const nome = data.toString().replace("\n", "")

         process.stdout.write(`Fala ${nome}!!\n`)
         process.exit() // Matando o processo aberto na escrita.
      })
   }
