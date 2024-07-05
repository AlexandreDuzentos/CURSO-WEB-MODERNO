/*
O this aponta para o objeto atual de um contexto de execução, no exemplo abaixo onde usamos o
this dentro da função falar, o contexto atual é o objeto pessoa, desse modo o this dentro da
funcao falar aponta para o objeto pessoa.
*/

const pessoa = {
    saudacao: "Bom dia",
    // Nova sintaxe do ES6 de criar função dentro de um objeto
    falar(){
      /** O this aqui dentro aponta para o próprio objeto pessoa */
      console.log(this.saudacao)
    }
}

// Chamando a função a partir do contexto do objeto pessoa
pessoa.falar()

/*
 Atribuindo a referência da função falar para uma constante, sem incluir o contexto de execução
 da função que no caso é o objeto pessoa.
 */
const falar = pessoa.falar 

/*
 A função falar não está sendo chamada a partir do contexto de execução do objeto pessoa
 embora eu tenho atribuido a referência da função falar a constante falar,
 o contexto de execução do objeto  para o qual deseja-se que o this aponte não é passado

 A chamada abaixo retorna undefined, por que do contexto de execução em ela foi chamada, ela
 não sabe para qual objeto aponta o this.
 */
falar()

/*
 Com o uso da função bind a função falar sendo atribuída a constante passa a apontar para
o contexto de execução do objeto pessoa, desse modo, agora ela sabe quem é o this
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const person = {
  name: "Alexandre",
  speak(){
     console.log(this.name)
  }
}


/* Salvando a referência da função na variável, mas não salvando a referência do this que
é usado internamente pela função, que no caso é person, desse modo quando a função falar
for invocada a partir da referência salva para a variável falar, ela não saberá quem é o this,
pois ela está sendo chamada a partir de um contexto de execução diferente do de person, e o contexto 
do this não foi passado para ela */
const speak = person.speak

console.log(speak()) // undefined


/** salvando a referência da função na variável falar e a referência do this usado internamente
 *  pela função, desse modo quando a função for invocada a  partir da referência, ela saberá quem
 * é o this, pois apesar dela estar sendo chamada de um contexto de execução diferente o contexto
 * do this foi passado para ela.
 */
const speak2 = person.speak.bind(person)

speak2()

/** Tudo oque está dentro de um objeto faz parte do seu contexto */

/*
O This dentro de uma função varia de acordo com quem chama a função ou seja em
qual contexto foi chamada a função, para que o this dentro de uma função aponte para
um local específico podemos usar a função bind para atingir esse objetivo.
 */

