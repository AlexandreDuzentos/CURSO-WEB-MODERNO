/**
 * While é uma estrutura de controle que repete um bloco de comandos enquanto uma condição for 
 * verdadeira
 * 
 * quando usar: quando a quantidade de repetições for indeterminada
 * 
 * É importante desenvolver um senso crítico de de qual estrutura de controle mais se adequa para resolver
 * um problema em especifico.
 */

/**
 *A função random do objeto Math gera valores aleatórios entre 0 e 1

 A expressão abaixo funciona da seguinte maneira: se o valor aletório gerado pela função random
 for zero, o valor aleatória será o mínimo(min), se for um, o valor aleatório será o máximo(max),
 se estiver entre o zero e o um ou seja for maior do que zero e menor do que um, o valor aleatório
 estará entre o mínimo(min) e o máximo(max) ou seja maior que o mínimo(min) e menor que o máximo(max)

  Math.random() * (max - min) + min
 */


  function gerarInteiroAleatoriaEntre(min, max) {
    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
  }

  let opcao = 0
  while(opcao !== -1){
     opcao = gerarInteiroAleatoriaEntre(-1, 5)
     console.log(`Opção escolhida foi: ${opcao}`)
  }


  