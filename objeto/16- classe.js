
// Em javascript uma classe é internamente uma função.
class Lancamento{
   // O método constructor é um método que é executada sempre que uma classe é instânciada.
   constructor(nome = "Genérico", valor = 0){
       // O this nesse contexto representa o objeto que será gerado a partir da instância dessa classe
       this.nome = nome;
       this.valor = valor;
   }
}

class CicloFinanceiro{
    constructor(mes, ano){
      this.mes = mes
      this.ano = ano
      this.lancamentos = []
    }

    addLancamentos(...lancamentos){
       lancamentos.forEach((l) => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado;
    }
}


let salario = new Lancamento("salario", 450)
let eletricidade = new Lancamento("Eletricidade", 230)
let agua = new Lancamento("Agua", 450)
let alimentacao = new Lancamento("comida", 230)

let Contas = new CicloFinanceiro("Abril", 2016)
Contas.addLancamentos(salario, eletricidade, agua, alimentacao)

const sumario = Contas.sumario()

console.log(sumario)