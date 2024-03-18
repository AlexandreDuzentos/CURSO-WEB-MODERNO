/** Aqui ficarão as tasks relacionadas ao código da aplicação, como
 * os arquivos de HTML, CSS e JS.
 */

// importando gulp
const gulp = require("gulp") 

/* importando plugin que integra o babel ao gulp */
const babel = require("gulp-babel") 

 // importando o plugin que integra o gulp ao uglify(para minificar os arquivos JS)
const uglify = require("gulp-uglify")

/*
 importando plugin que integra o gulp ao sass e o próprio sass, pois
 o plugin gulp-sass na versão 4.0.2 não embute o compilador do sass
*/
const sass = require("gulp-sass")(require("sass")) 

// importando plugin que integra o gulp ao uglifycss
const uglifycss = require("gulp-uglifycss")

// importando plugin que integra o gulp ao htmlmin
const htmlmin = require("gulp-htmlmin") 

// importando plugin que integra o gulp ao concat
const concat = require("gulp-concat") 

function appHTML(callback){
     gulp.src("./src/**/*.html")
         .pipe(htmlmin({ collapseWhitespace : true}))
         .pipe(gulp.dest("./build"))
    return callback()
}

function appCSS(callback){
    gulp.src("./src/assets/sass/index.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest("./build/assets/css"))
    return callback()
}

function appJS(callback){
    gulp.src("./src/assets/js/**/*.js")
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("./build/assets/js"))
    return callback()
}

function appIMG(callback){
   gulp.src("./src/assets/imgs/*.png")
       .pipe(gulp.dest("./build/assets/imgs"))
  return callback()
}

/** 
 * Registrando uma task no gulp.
 * 
 * Fizemos apenas isso porque precisaremos reutilizar algumas tasks, 
 * no arquivo server.js na task watchFiles, para que quando algum arquivo
 * for alterado, eu tenha condições de voltar a executar determinadas tasks.
 * 
 * Quando usamos o series e o parallel não necessariamente precisamos
 * registrar as tasks,
 * 
 */
gulp.task("appHTML", appHTML)
gulp.task("appCSS", appCSS)
gulp.task("appJS", appJS)
gulp.task("appIMG", appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
} 