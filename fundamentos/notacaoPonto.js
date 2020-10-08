console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    // A partir do this e anotação ponto consegue criar atributos e funções 
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
// usando anotação ponto pra acessar atributos que estão visíveis em um determinado objeto.
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()