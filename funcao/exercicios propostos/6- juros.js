/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
   primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
   retornará o valor da aplicação sob o regime de juros compostos.
 */

   function montanteJurosSimples(capitalIinicial, taxaDeJuros, tempoAplicacao){
     let juros = capitalIinicial * (taxaDeJuros/100) * tempoAplicacao
     let montante = juros + capitalIinicial
     return montante
   }

   let montante = montanteJurosSimples(2000,10, 3)
   console.log(montante)


   function montanteJurosCompostos(capitalInicial, taxaDeJuros, tempoAplicacao){
       let montante = capitalInicial * ((1 + (taxaDeJuros/100)) ** tempoAplicacao)
       return montante
   }

   montante = montanteJurosCompostos(300, 1, 12)
   console.log(montante)

   