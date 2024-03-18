/**
 * Aqui ficarão as tasks relacionados com as dependências instalados
 * pelo npm.
 */

const gulp = require("gulp")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

/** Task responsável por minificar e concatenar os arquivos de css do
 * font-awesome instalados pelo npm e salvar os arquivos transformados
 * num diretório novo.
 */
function depsCSS(callback){
   gulp.src("./node_modules/font-awesome/css/font-awesome.css")
       .pipe(uglifycss({"uglyComments": false}))
       .pipe(concat("deps.min.css"))
       .pipe(gulp.dest("./build/assets/css"))
       return callback()
}

/*
    Task responsável mover todos os arquivos de fonts do font-awesome
    que foram instalados pelo npm para um novo lugar(diretório)
 */
function depsFonts(callback){
    gulp.src("./node_modules/font-awesome/fonts/*.*")
       .pipe(gulp.dest("./build/assets/fonts"))
    return callback()
}

module.exports = {
    depsCSS,
    depsFonts
}