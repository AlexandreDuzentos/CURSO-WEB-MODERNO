/**
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
  a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
  comando switch. Crie um caso default para produto não existente.
 */

  function precoDoLanche(codigo, qtd){
    let totalAPagar
    switch(codigo){
         case 100:
            totalAPagar = 3 * qtd
             break
         case 200:
            totalAPagar = 4 * qtd
             break
        case 300:
            totalAPagar = 5.5 * qtd
             break
        case 400:
            totalAPagar = 7.5 * qtd
             break
        case 500:
            totalAPagar = 3.5 * qtd
             break
        case 600:
            totalAPagar = 2.8 * qtd
             break
        default: 
            console.log("Produto inexistente!")           
    }

    return totalAPagar
  }


  console.log(precoDoLanche(100, 5))
  console.log(precoDoLanche(200, 5))
  console.log(precoDoLanche(300, 5))
  console.log(precoDoLanche(400, 5))
  console.log(precoDoLanche(500, 5))
  console.log(precoDoLanche(600, 5))
