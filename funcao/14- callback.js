/**
 * Exemplo de callback no browser
 * Para a função ser executada quanto um evento ocorrer é preciso registrá-la na sessão,
 * clicando em enter.
 * */ 
document.getElementsByTagName('body')[0].onclick = function(e){
   console.log("O evento ocorreu!")
}