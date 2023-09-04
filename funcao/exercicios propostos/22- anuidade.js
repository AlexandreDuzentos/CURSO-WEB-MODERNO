/**
 * 2) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
  parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
  anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
  compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

 */

  function calcularAnuidade(mes, valorAnuidade){
    let totalAPagar
    if(mes >= 1 && mes <= 12){ 
        const atraso = mes - 1
        totalAPagar = valorAnuidade * ((1 + (5/100)) ** atraso) 
    } else {
        totalAPagar = "Mês inválido"
    }

    return totalAPagar.toFixed(2)
  }

  console.log(calcularAnuidade(12, 2500))
  console.log(calcularAnuidade(6, 2500))
  console.log(calcularAnuidade(5, 2500))
