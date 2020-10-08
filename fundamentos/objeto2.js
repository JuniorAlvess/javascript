/*
* todo objeto sem instância alguma é uma função, 
* passa a ser um objeto a partir do momento que é instaciada
*/

// a function pode ser instâciada a partir da palavra reservada new
// para mais especificações sobre new visite: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new
console.log(typeof Object)
console.log(typeof new Object)

// pode criar instâcias de functions que você mesmo definiu
const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

// pode criar instâcias a partir de uma class
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)