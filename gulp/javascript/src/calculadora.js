/*
 * Essa é uma calculadora bem legal!!!

   Retornar o objeto no final de cada método me permite ter encademento
   de chamadas de métodos.
 */
const Calculadora = {
    _resultado: 0,
    get resultado() {
        return this._resultado
    },
    somar(a, b = 0) {
        const soma = a + b
        this._resultado += soma
        return this
    },
    potencia(a, b) {
        const potencia = a ** b
        this._resultado += potencia
        return this
    },
    zerar() {
        this._resultado = 0
        return this
    },
    log() {
        console.log(this._resultado)
    }
}

