/**
 * 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
  casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
  escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
  também um default, que retornará uma mensagem de erro no console.
 */

 function fruta(fruta){
    let status
    switch(fruta){
      case "kiwi":
          status = "Estamos com escassez de kiwi"
        break
      case "melancia":
          status = "Aqui está, são 3 reais o quilo"
        break
      case "maca":
          status = "Não vendemos essa fruta aqui"
        break
     default:
        status = "Fruta não existe"
    }

    return status
 }

 console.log(fruta("kiwi"))
 console.log(fruta("melancia"))
 console.log(fruta("maca"))
 console.log(fruta("pera"))

