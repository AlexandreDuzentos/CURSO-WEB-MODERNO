/*
 Escopo: é o local onde determinada variável é visível ou acessível.
 Escopos: local e global
  */



{
    {
        {
           var sera = "Seraaá!"
           console.log(sera)
        }
    }
}

// Variáveis declaradas com o var não têm escopo de bloco, ou seja, elas são visíveis fora do blocos
console.log(sera)


function teste(){
     var amor  = "love!"
     console.log(amor)
}

teste()
// Variáveis declaradas com o var têm escopo de função, ou seja, elas são apenas visíveis dentro da função
// Variáveis declaradas com o var têm escopo  global e de função
console.log(amor)

/* No browser, nós temos o objecto window, que é suportado por todos os navegadores, ele representa a
janela do navegador.

O objeto window permite ao javascript conversar com o browser

ele é o objecto global do browser

 Todos objetos, funções e variáveis globais, automaticamente se tornam membros do objecto window

No navegador, variáveis criadas com a palavra reservada var ficam no escopo global e isso pode
 causar problemas.

 Vantagem de ter variáveis no escopo global: a variável ser acessível a partir de qualquer local do programa.
 Desvantagem: Qualquer sobescrita dessa variável pode causar um problema muito sério
 */