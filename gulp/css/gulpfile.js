/** A forma de importar dependências abaixo é do sistema de módulos
 * do CommonsJS e não do ECMAScript.
 */
const { series, parallel } = require("gulp")
const gulp = require("gulp")

/**
 * O gulp-sass a partir da versão usada, já não embute o compilador sass,
 * por conta disso, o sass foi importado em parelelo ao gulp.
 */
const sass = require('gulp-sass')(require('node-sass'));
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

/*
function lerArquivo(){
   console.log("Lendo arquivo")
}

let conteudo = lerArquivo() // chamando ou invocando a função
let conteudo2 = lerArquivo // passando a referência da função para variável.
*/


function transformacaoSASS(callback){
    gulp.src("./src/sass/index.scss")
        .pipe(sass().on('error', sass.logError)) // pipe que converte o sass para css
        .pipe(uglifycss({"uglyComments": true})) // pipe para remover comentários no hora de minificar os arquivos
        .pipe(concat("estilo.min.css")) // pipe para definit o nome do arquivo final que será gerado
        .pipe(gulp.dest("./build/css")) // pipe para definir o nome da pasta onde ficarão os arquivos

        return callback()     
}

function moverArquivoIndex(callback){
  gulp.src("./src/index.html")
      .pipe(gulp.dest("./build/"))
  return callback()
}

/* Passando a referência da task para a função series */
module.exports.default = parallel(
        transformacaoSASS,
        moverArquivoIndex
    )