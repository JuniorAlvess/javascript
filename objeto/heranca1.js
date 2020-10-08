const ferrari = {
    medole: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// um objeto em javaScript tem uma referência para o seu prototipo, e esta é a forma como o javascript define herança
// O __proto__ lhe permite acessar quem é o  prototipo do 'objeto pai'
console.log(ferrari.__proto__)
// um objeto criado por padrão aponta para um Object.prototype
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
// prototype está presente apenas dentro de funções
console.log(Object.prototype.__proto__ === null) // true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
// prototype está presente apenas dentro de funções
console.log(Object.prototype, MeuObjeto.prototype)