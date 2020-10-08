/*
* O operador ternário é composto por três partes
* 1 - expressão que vai sempre retornar true || false
* 2 - retornara true
* 3 - retornara false
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))


const a = 'Olá'
const b = 'Ola'

const word = a == b ? "São iguais" : "São diferentes"
console.log(word)