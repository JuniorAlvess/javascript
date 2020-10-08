const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// A função object.keys exibira todas as chaves contidas no objeto pessoa
console.log(Object.keys(pessoa))
// A função Object.values exibira todos os valores contidos no objeto pessoa
console.log(Object.values(pessoa))
// A função object.entries exibira um array contendo sub-arrays com chave/valor de um objeto
console.log(Object.entries(pessoa))

// percorrenco uma array com object.entries
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// A função Object.defineProperty é usada para definir uma propriedade  em um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // permitindo que seja listada
    writable: false, // impedindo que seja alterada
    value: '01/01/2019' 
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/** 
 * Object.assing (ECMAScript 2015) concatena todos os objetos passados como parâmetros
 * ao primeiro objeto, o primeiro objeto pega todos os atributos dos outros objetos que estão concatenados a ele
 * e se caso tiver algum atributo que seja igual a algum que já lhe pertence, ele será subscrito
 */
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234 // valor não será permitido
console.log(obj)