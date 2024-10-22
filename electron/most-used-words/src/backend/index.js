const { ipcMain } = require("electron")

import pathToRows from "./pathToRows"
import prepareData from "./prepareData"
import groupWords from "./groupWords"

/*
 Isso serve para que consigamos ouvir na comunicação
 entre processos uma determinada coisa.

 O IpcMain é usado na minha aplicação electron backend e permite
 a comunicação com o front-end por meio do canal definido.
 

 Aqui no meu index.js do meu backend eu irei esperar ouvir uma
 comunicação do tipo blablabla, e quando essa comunicação for 
 ouvida, a callback será executada.

 O primeiro parâmetro é chamado de canal de comunicação e quando tiver
 alguma comunicação nessa canal, a callback será executada.
*/

ipcMain.on("process-subtitles", (event, paths) => {
    pathToRows(paths)
    .then(rows => prepareData(rows))
    .then(prepareData => groupWords(prepareData))
    .then(groupWords => {
      /* Respondendo a comunicação feita pelo vue com o meu backend */
      event.reply("process-subtitles", groupWords)
    }).catch(error => console.log(error))

   
})