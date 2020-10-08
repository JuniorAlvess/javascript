// quando var é usado para declarar uma variável, pode-se 
// redeclarar a mesma variável mais de uma vez.

var a = 3 // 'a' identificador, 3 valor recebido

//let é a melhor forma para declarar uma variável, uma vez declarada não é possivel ser redeclarada
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// Constante, tudo que não há algum tipo de alteração, deve ser declarado como constante.
const c = 5
// é impossível atribuir um novo valor para uma constante
//c = 5 erro

console.log(c)