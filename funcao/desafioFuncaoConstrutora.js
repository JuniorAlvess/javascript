class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

function CriarPessoa (nome) {
    this.nome = nome
    this.falar = function(){
         console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new CriarPessoa('João')
p2.falar()
