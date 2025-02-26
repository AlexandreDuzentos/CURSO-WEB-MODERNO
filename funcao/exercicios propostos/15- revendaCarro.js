/**
 * 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.

 */

function revendaCarro(modeloCarro){
   let status
   switch(modeloCarro){
      case "hatch":
          status = "Compra efetuada com sucesso"
        break
      case "sedan":
      case "motocicleta":
      case "caminhonetes":
          status = "Tem certeza que prefere esse modelo?"
        break
      default:
          status = "Não trabalhamos com este tipo de automóvel aqui"
   }

   return status
}


console.log(revendaCarro("hatch"))
console.log(revendaCarro("sedan"))
console.log(revendaCarro("motocicleta"))
console.log(revendaCarro("camionetes"))
