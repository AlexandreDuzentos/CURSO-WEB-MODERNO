/** Importando o gulp */
const gulp = require("gulp")


const { series, parallel} = require("gulp")

/* 
 series é uma função que permite realizar tasks em série
 sintaxe abaixo: opcional.
*/ 
// const series = gulp.series

const antes1 = callback => {
  console.log("Tarefa antes 1")
  return callback()
}

const antes2 = callback => {
  console.log("Tarefa antes 2")
  return callback()
}

/**
 * Task reponsável por cópiar arquivos de um local para outro.
 * 
 * A callback passada como parâmetro precisa ser chamada quando
 * a execução de uma determinada tarefa acaba, ou seja, ela serve
 * para notificar o gulp que determinada tarefa foi concluída.
 * 
 * quem será responsável por passar a callback para a task copiar
 * é o próprio gulp.
 */
function copiar(callback){
    /** A função src do gulp serve para selecionar quais arquivos serão
     * usados como entrada para a task que se pretende realizar.
     * 
     * A função pipe serve para aplicar transformações nos arquivos de
     * entrada afim de realizar a task.
     * 
     * A função dest cópia os arquivos de entrada passados para o array
     * para a pasta pastaB.
     */
    gulp.src(['./pastaA/arquivo1.txt', './pastaA/arquivo2.txt'])
        .pipe(gulp.dest('./pastaB')) // se a pasta pastaB não existir ela será criado pelo gulp
        
    /*   Exemplos da riqueza de possibilidades na hora
         de realizar transformações.
        .pipe(imagemPelaMetade())
        .pipe(imagemEmPretoEBranco())
        .pipe(transformacaoA())
        .pipe(transformacaoB())
        .pipe(transformacaoC())
    */
         
    return callback()
}

/**
 * Invocando a função series passando para ela a task a ser executada
 * em série e exportando a mesma para fora do módulo, de modo a torná-la
 * pública, para que assim, ela possa ser executada pelo comando gulp.
 * 
 * Um módulo no node por padrão é privado e pode ser acessado apenas
 * pelo próprio módulo, caso se deseja que ele se torne público, ele
 * precisará ser exportado.
 * 
 * Tasks públicas são exportadas do arquivo gulp, que no caso é o atual,
 * oque permite que elas sejam executadas pelo comando gulp.
 * 
 * COMANDOS:
 * 
 *  gulp: é um comando que serve para executar uma task pública, ele
 * deve ser rodado no terminal dentro da pasta onde está o arquivo gulp.
 * 
 * Na hora de exportar uma task, ela precisa se chamar default, a task
 * default será a porta de entrada do meu script(gulpfile) para que o
 * gulp faça a execução de tasks.
 * 
 * default é um atributo dinâmico sendo criado dentro do objeto exports
 * que armazenará as tasks que será executada pelo comando gulp. 
  */

const fim = callback => {
   console.log("Última tarefa")
   return callback()
}

/** É possível misturar execuções em série e em paralelo */
module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim
) 