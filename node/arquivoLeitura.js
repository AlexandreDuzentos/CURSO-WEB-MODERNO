const fs = require("fs")

  /**
   * __dirname: essa constante traz o caminho absoluto até a pasta atual
   * __filename: essa constante traz o caminho absoluto até o arquivo atual
   */
  const caminho = __dirname + "/arquivo.json"

  /*
  Leitura síncrona: nesse tipo de leitura a próxima linha de código não será executada enquanto
  o arquivo não tiver sido lido por completo.

  A leitura de forma síncrona trava o event loop.
 */

  /*
   O encoding deve ser o mesmo usado na escrita do arquivo que está a ser lido, para que o método
   consiga interpretar de forma correta aquilo que foi escrito no arquivo.
  */
  const conteudo = fs.readFileSync(caminho, "utf-8")
  console.log(conteudo)


  /**
   * Leitura assíncrona: nesse tipo de leitura a próxima linha de código será executada, mesmo que
   * o arquivo ainda não tiver sido lido por completo.
   */

/*
 A callback passada como terceiro argumento, será chamada quando a leitura do arquivo estiver con
 cluída e para ela serão passadas dois argumentos, o erro e o conteúdo do arquivo.
*/
  fs.readFile(caminho, "utf-8", (error, conteudo) => {
      const config = JSON.parse(conteudo)
      console.log(`${config.db.host}:${config.db.port}`)
  })


  // Importando um arquivo json, quando essa abordagem é usado o conteúdo do arquivo vêm como objeto.
  const config = require("./arquivo.json")
  console.log(config.db.host)

  // Lendo diretório de forma assíncrona.
  fs.readdir(__dirname, (error, arquivos) => {
        console.log("Conteúdo da past...a")
        console.log(arquivos)
  })