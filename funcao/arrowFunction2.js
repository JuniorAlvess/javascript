function Pessoa() {
    this.idade = 0

    setInterval(() => {
        // uma das vantagens de usar a função arrow é que o this não vária, e sempre aponta para o mesmo objeto.
        this.idade++
        console.log(this.idade)
    }, 1000)
}