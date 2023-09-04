// O this aponta para o objeto atual de um contexto de execução.

const pessoa = {
    saudacao: "Bom dia",
    // Nova sintaxe do ES6 de criar função dentro de um objeto
    falar(){
      console.log(this.saudacao)
    }
}

// Chamando a função a partir do contexto do objeto pessoa
pessoa.falar()

/*
 Atribuindo a função falar para uma constante, sem incluir o contexto de execução da função
 que no caso é o objeto pessoa.
 */
const falar = pessoa.falar 

/*
 A função falar não está sendo chamada a partir do contexto de execução do objeto pessoa
 embora eu tenho atribuido a função falar a constante falar, o contexto de execução do objeto
 pessoa não é passado para a constante falar.

 A chamada abaixo retorna undefined, por que do contexto de execução em ela foi chamada, ela
 não sabe para qual objeto aponta o this.
 */
falar()

/*
 Com o uso da função bind a função falar sendo atribuída a constante passa a apontar para
o contexto de execução do objeto pessoa, logo ela sabe quem é o this
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()