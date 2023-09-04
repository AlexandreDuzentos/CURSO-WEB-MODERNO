function Pessoa(){
    this.idade = 0

    /**
     * É uma função dispara outra função de tempos em tempos(num intervalo pré definido) 
     * 
     * O this variará dentro da função , por que a função foi chamada a partir da função
     * setInterval, que possui seu próprio this, e não foi chamada por mim directamente.
     *  
     * A função bind associará a chamada da função pelo setInterval ao objeto Pessoa.
     * 
     * Quando a função é chamada a partir do setInterval, o this dentro dela(da função) aponta para outro
     * objeto(Timeout)
     * 
     * O argumento this passado para função bind aponta para o objeto atual do contexto
     * de execução que é Pessoa 
     * */
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 2000)
}

new Pessoa



function Pessoa3(){
    this.idade = 0

    // Isso garatirá que o this sempre aponta para o objeto Pessoa3
    const self = this

    /**
     * É uma função dispara outra função de tempos em tempos(num intervalo pré definido) 
     * 
     * O this variará dentro da função , por que a função foi chamada a partir da função
     * setInterval, que possui seu próprio this, e não foi chamada por mim directamente.
     *  
     * A função bind associará a chamada da função pelo setInterval ao objeto Pessoa.
     * 
     * Quando a função é chamada a partir do setInterval, o this dentro dela(da função) aponta para outro
     * objeto(Timeout)
     * 
     * O argumento this passado para função bind aponta para o objeto atual do contexto
     * de execução que é Pessoa 
     * */
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa3



function Pessoa2(){
    this.idade = 0

    /*
      Quando a função é chamada a partir do setInterval, o this dentro dela(função) aponta para outro
      objeto(Timeout)
    */
    setInterval(function(){
        console.log(this)
    }, 1000 * 5)
        
}

new Pessoa2