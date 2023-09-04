/**
 * 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
  considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
  de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
  idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

  function valorAPagarDeAcordoPlanoSaude(idade){
    const valorPadrao = 100
    let totalAPagar

    if(idade < 10) {
        totalAPagar = valorPadrao + 80
    } else if(idade >= 10 && idade <= 30) {
        totalAPagar = valorPadrao + 50
    } else if(idade >= 30 && idade <= 60){
         totalAPagar = valorPadrao + 95
    } else {
         totalAPagar = valorPadrao + 130
    }

    return `Total a pagar R$ ${totalAPagar}` 

  }

  console.log(valorAPagarDeAcordoPlanoSaude(6))
  console.log(valorAPagarDeAcordoPlanoSaude(15))
  console.log(valorAPagarDeAcordoPlanoSaude(31))
  console.log(valorAPagarDeAcordoPlanoSaude(80))