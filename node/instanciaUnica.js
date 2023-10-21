/*
 Por padrão o node faz cache dos módulos importados, ou seja, uma única instância de cada módulo
 é retornada.
 */

 // Retornando diretamente um objeto.
module.exports = {
    valor: 1,
    inc(){
        return this.valor++
    }
}