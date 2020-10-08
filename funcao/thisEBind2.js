function Pessoa() {
    this.idade = 0

    const self = this
    // a função setInterval dispara uma outra função a partir de um determinado intervalo que foi passado.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 000)
}

new Pessoa