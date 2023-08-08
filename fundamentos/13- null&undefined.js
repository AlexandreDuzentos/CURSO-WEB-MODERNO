/*
 Atribuição por valor e atribuição por referência 
 Numa atribuição por valor é passada uma cópia para uma variável para a outra, e cada variável terá o seu valor independente,
  o que signica que alterações feitas numa das variáveis reflitirão apenas aquela variável

 Numa atribuição por referência é passada a referência de memória de uma variável para a outra, e as duas variáveis passam a apontar para o mesmo endereço de memória,
 oque significa que uma alteração numa das variáveis reflitirão  também outra.

 A Atribuição por valor é feita apenas por valores primitivos(int,string, float)
 A atribuição por referência é feita apenas por valores referência(objecto, array)
 */


 /* 
   O undefined é retornado quando a variável não foi inicializada 
   Evitar atribui de forma explícita o undefined
 */
 let firstName

 console.log(firstName)

  // O is not defined é retornado quando a variável não foi declarada
 // console.log(lastName)

/* O null significa ausência de valor, foi inicializada com uma ausência de valor 
   também serve para dizer que uma variável do tipo referência não aponta para nenhum endereço de memória
 */
 firstName = null
 console.log(firstName)

 const produto = {}
 console.log(produto.categoria) // retornará undefined porque a categória não foi inicializada
 
 //console.log(produto.categoria.subcategoria) // retornará um erro, por que não é possível ler um atributo de outro que está undefined


 produto.categoria = "Eletrodomésticos"

 console.log(produto)

 produto.categoria = undefined // Evitar atribuir o undefined de forma explícita, deixa essa função para a linguagem
 console.log(produto)

 console.log(!!produto.categoria) // o undefined resolve para falso

 // delete produto.categoria // exclui um atributo do objeto

 console.log(produto)

 produto.categoria = null
 produto.preco = 0 // Significa que o preço do produto é zero, por que é gratuito
 produto.preco = null // Significa que o produto não tem preço

 console.log(produto)

 








