// Closure: é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico: é o contexto na qual a função declarada físicamente dentro do seu código.
// A função tem consciência do contexto em que foi declarada.


// Contexto léxico em ação!

const x = "Global"

function fora() {
  const x = "local"
  function dentro() {
    return x
  }

  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

