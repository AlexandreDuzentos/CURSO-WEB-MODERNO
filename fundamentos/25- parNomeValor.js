// Estrutura Par nome/valor: é uma estrutura em que temos um identificador  que recebe um valor

/*
   Contextos léxicos: arquivo em uso,
   dentro de algum bloco de código(função, if, while, for, for in),
   browser no contexto global */
/* 

Contexto léxico: é o cenário na qual o par chave/valor foi definido(aqui foi definido no contexto
desse arquivo)
*/

/*
 Quando damos um output em uma variável, ela usa sempre no contexto léxico mais próximo dela, caso
 não encontre nesse contexto léxico, ela procurará em outros mais abrangentes
*/

const saudacao = "Hi!" // contexto léxico 1

function executar(){
    const saudacao = "Hello!" // contexto léxico 2
    return saudacao
}

// Objecto são grupos aninhados de pares chave(nome, identificador)/valor
const cliente = {
    nome: "Alexandre",
    idade: 20,
    peso: 75,
    endereco : {
        logradouro: 'Rua muito legal',
        numero : 123
    }

}

console.log(saudacao)
console.log(executar())