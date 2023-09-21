class Avo {
    constructor(sobrenome){
      this.sobrenome = sobrenome
    }
}

// Classe Pai herdando da classe Avo, ou seja, estabelecendo uma relação de protótipo com a classe Avo
class Pai extends Avo {
   constructor(sobrenome, profissao = "Professor"){
     // O super chama o construtor da superclasse
     super(sobrenome)
     this.profissao = profissao
   }
}

// Classe Filho herdando da classe Pai, ou seja, estabelecendo uma relação de protótipo com a classe Pai
 class Filho extends Pai{
    constructor(){
        super("Duzentos")
    }
 }

 const filho = new Filho()
 console.log(filho)

 const pai = new Pai("Paulo", "Músico")
 console.log(pai)

 const avo = new Avo("Marcos")
 console.log(avo)