/**
 * Em javascript uma função nada mais é do que um
 * uma classe, internamente uma função não possui diferença
 * de uma classe, o que difere é apenas a sintaxe(maneira de escrever)
 * 
 * Função construtora é uma função que possui atributos
 *   métodos público e privados.
 */


function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0
    
    // Atributo público
    this.speed = 0
    
    // Método público
    this.acelerar = function(){
       if(velocidadeAtual + delta <= velocidadeMaxima){
          velocidadeAtual += delta
       } else {
          velocidadeAtual = velocidadeMaxima
       }
    }
    
    // método público
    this.getVelocidadeAtual = function(){
         return velocidadeAtual
    }
   
    // Método privado
    let getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

let bmw = new Carro()
bmw.acelerar()
console.log(bmw.getVelocidadeAtual())


const audi = new Carro(350, 20)
audi.acelerar()
audi.acelerar()
audi.acelerar()
audi.acelerar()
audi.acelerar()

 console.log(audi.getVelocidadeAtual())

 console.log(typeof Carro)
 console.log(typeof audi)
