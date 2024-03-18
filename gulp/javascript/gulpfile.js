/**
 * Fazer um workflow usando o gulp para pegar os arquivos JS da pasta
 * src, concatenar esses arquivos num arquivo só, aplicar o babel para ele
 * pegar a versão mais moderna do código presente nesses arquivos e transforma-los
 * numa versão mais antiga, que é mais compatível com os browsers.
 */

const { series } = require("gulp")
const gulp = require("gulp")

// plugin que integra o gulp ao concat, que concatena vário arquivos num só
const concat = require("gulp-concat")

// plugin que integra o gulp ao uglify, que minifica o arquivo.
const uglify = require("gulp-uglify")

/*
 plugin que integra o gulp ap babel, que converte o código js de uma
 versão mais moderna para outra mais compatível com os browsers.
*/
const babel = require("gulp-babel")

function padrao(callback) {
    gulp.src(['./src/calculadora.js', './src/testeCalculadora.js'])
         /** A primeira tranformação converte o código para uma versão
          * mais compatível com os browsers, ignorando os arquivos de
          * comentários.
          **/
        .pipe(babel({
             /* passando configurações para o objeto de configuração do babel */
            comments: false, // arquivos de comentários não podem ser transferidos para o arquivo final
            presets: ["env"] // o preset env aponta para a versão mais nova do javascript, há outros presets para outras versões
        }))
        .pipe(uglify()) // pipe para minificar os arquivos
        // a função concat recebe como parâmetro o nome do arquivo final
        .pipe(concat("codigo.min.js")) // pipe para concatenar todos os arquivos num só
        .on("error", error => console.log(error)) // se ocorrer algum erro no pipe acima, a callback será executada imprimindo a msg de erro
        .pipe(gulp.dest("./build")) // pipe para setar a pasta de destino dos arquivos transformados

    return callback()
}

module.exports.default = series(padrao)