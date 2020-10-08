class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// extends é usado para definir que uma class possui uma outra class como prototipo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('silva')
    }
}

const filho = new Filho
console.log(filho)