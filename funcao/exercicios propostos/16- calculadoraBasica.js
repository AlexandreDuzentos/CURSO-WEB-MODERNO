/**
 * 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
   como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 */

   function calculadora(valor1, operacao, valor2){
       switch(operacao){
          case "+":
              console.log(valor1 + valor2)
            break
          case "-":
              console.log(valor1 - valor2)
            break
          case "x":
              console.log(valor1 * valor2)
            break
          case "/":
              console.log(valor1 / valor2)
            break
          default:
              console.log("Operaçã inválida!")
       }
   }

   calculadora(2,"+", 9)
   calculadora(2,"-",9)
   calculadora(2,"x",9)
   calculadora(2,"/",9)