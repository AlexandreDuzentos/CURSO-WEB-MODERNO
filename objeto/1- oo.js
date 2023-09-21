/**
 * Em javascript há três formas de se criar um objeto
 * 1: através da criação de uma função construtora: é uma função que possui atributos e comportamentos(públicos ou privados)
 * 2: através do retorno de uma função factory"é uma função que fabrica e retorna um objeto.
 * 3: através da criação de uma função de forma literal: é uma função que possui um construtor, atributos e comportamentos(públicos e privados)
 */

// Procedural: nesse cenário, temos funções que manipulam dados disponíveis de forma global
processamento(valor1, valor2, valor3)

// 00: nesse cenário, temos atributos e comportamentos pertencentes um objeto, o objeto é um tipo de dado
objeto = {
   valor1,
   valor2,
   valor3,
   processamento(){
    // ...
   }
}

/**
 * PILARES DA POO:
 * 
 * obs: um dos desafios da poo é pegar o mundo real e transformar isso em software.
 * 
 * 1: abstração: é a habilidade em focar nos aspectos essenciais(atributos, comportamentos) de um contexto qualquer para criar
 * um objeto, ignorando  características menos importantes ou acidentais.
 *
 * 2: Encapsulamento: é ocultar certos detalhes de implementação interna de um objeto para quem não precisa ter 
 * acesso a eles.
 * 
 * 3: herança: é a possiblidade de uma subclasse herdar atributos e comportamentos de uma superclasse.
 * 
 * 4: polimorfismo: é termos a possibilidade de realizar a mesma tarefa de formas diferentes.
 */