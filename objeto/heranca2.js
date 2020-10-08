// cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // não é recomendado, porque isso podera impactar em toda a estrutura
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// EXEMPLO COMPLEXO

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`       
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        // a palavra reservada super é usada para referênciar o prototipo
        return `${this.modelo}: ${super.status()}`
    } 
}

// estabelecendo relação de prototipo, onde ferrari possui carro como o seu prototipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
