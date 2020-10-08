// getter e setter são funções que dentro dessas funções os valores são acessados

const sequencia = {
    _valor: 1, //convenção
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)