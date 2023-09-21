/**
 * Uma das formas de se ter encapsulamento dentro de objeto é ter atributos privados e ter métodos
 * que alterem(setters) ou lêm(getters) o valor desse atributo, de modo a barrar o acesso direto aos atributos, evitando
 * assim inconsistências nos valores dos meus atributos.
 * 
 * A vantagem de acessar um atributo em cima de uma função é o fato de poder fazer-se alguma validação
 * ou processamento antes de retornar o dado.
 */


const sequencia = {
    // o underline(_) no início do atributo é uma convenção para indicar que o atributo abaixo é pretendido ser privado.
    _valor: 10 , 

    // getter: método para acessar um atributo do objeto
    get valor(){return this._valor++},

    // setter: método para modificar um atributo do objeto
    set valor(valor){
     if(valor > this._valor)
       this._valor = valor
    }   
}

// Essa atribuição já chama o método set
sequencia.valor = 30

// Essa output(saída) já chama o método get
console.log(sequencia.valor)
