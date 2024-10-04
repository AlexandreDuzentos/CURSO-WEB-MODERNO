export default class Cliente {
    /* Declarando atributos privados */
    #id: String
    #nome: String
    #idade: Number

    constructor(nome: String, idade: number, id: String = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static vazio(){
        return new Cliente("", 0)
    }

    get id(){
        return this.#id
    }

    get idade(){
        return this.#idade
    }

    get nome(){
        return this.#nome
    }
}