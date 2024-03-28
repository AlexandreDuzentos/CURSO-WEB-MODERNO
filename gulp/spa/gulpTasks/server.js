/**
 * Arquivo para controlar o servidor que será usado em desenvolvimento,
 * não é um servidor que será usado na produção, o servidor ajudará a controlar
 * o fluxo de desenvolvimento, por exemplo, alterei um arquivo, automaticamente
 * o build executou, gerou os arquivos finais, o servidor foi restartado e
 * a aplicação está na versão mais nova.
 * 
 * Ele ajudará a monitorar alterações nos arquivos, quando uma alteração
 * for detectada, ele já executa todo processo de gerar o build
 * automaticamente e já atualiza a aplicação para a versão mais nova.
 */

const gulp = require("gulp")

/**
 *  Plugin Streaming gulp para executar um servidor web local com
 *  LiveReload.
 *  */
const webserver = require("gulp-webserver") 

/** Dependência que integra o gulp ao watch, ou seja fica monitarando
 * alterações arquivos e quando elas ocorrem o gulp executa determinada task.
 */
const watch = require("gulp-watch")

function watchFiles(callback){
    /** A função watch recebe dois parâmetros, sendo o primeiro
     * a caminho dos arquivos que se deseja monitorar e o segundo
     * a callback que será executada caso ocorra alguma mudança nos arquivos
     * sendo monitorados.
     * 
     * gulp.series('appHTML')() - executando a Task appHTML manualmente, mas para
     * isso ela precisa estar registrado no gulp.
     */
   watch("./src/**/*.html", () => gulp.series('appHTML')())
   watch("./src/**/*.scss", () => gulp.series('appCSS')())
   watch("./src/**/*.js", () => gulp.series('appJS')())
   watch("./src/assets/imgs/**/*.*", () => gulp.series('appIMG')())

    return callback()
}

/** Quando  a função webserver for executada o servidor ficará escutando
 * por requisições http no endereço http://localhost e na porta 8080, o endereço
 * é o mencionado anteriormente porque  estamos num ambiente de
 * desenvolvimento local, na qual o servidor web está hospedado em
 * http://localhost, localhost é uma referência para o endereço ip 127.0.0.1, 
 * que é um endereço de lookback, ou seja, requisições feitas para esse
 * endereço são direcionadas para a minha própria máquina, resumindo, o servidor web, está hospedado
 * na minha própria máquina, desse modo, a requisição é enviada para a minha própria máquina
 * e a porta é a 8080 porque foi configurada desse modo
 * no objeto de configuração do webserver, e quem a atende a requisição é
 * específicamente o webserver porque o processo dele está a escuta na porta 8080, e por padrão a primeira
 * requisição é feita para o arquivo index.html, que estará na raíz do diretório raíz
 * do webserver.
 */
function server(callback){
     /** A pasta build é o diretório raíz do webserver(servidor web), ou seja,
      * tudo oque estiver dentro desse diretório estarão sendo servido pelo
      * webserver.
      * 
      * O webserver, com base na configuração passada para o objeto que ele recebe como
      * parâmetro, abre o browser e envia a primeira requisição para ele mesmo, que está
      * hospedado no endereço http://localhost:8080, e portanto a requisição será enviada
      * para a pasta raíz do servidor, que é a build no nosso caso, e por padrão o servidor
      * responde com o arquivo index.html que fica no diretório raíz do servidor.
      */
     gulp.src("build")
     .pipe(webserver({
         port: 8080, // porta na qual o webserver atenderá requisições
         open: true, // abre o navegador web(no endereço http://localhost e na porta 8080)
         livereload: true
     }))

    return callback()
}

module.exports = {
    watchFiles,
    server
}