const pai = { nome: 'Pedro', corCabelo: 'preto'}

// com o Object.create é possivel criar altomaticamente o objeto filha com o prototipo pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'carla' // não será permitido
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    // hasWonProperty é usado para saber se um determinado atributo veio por herança ou pertence ao proprio objeto
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
