let a = 3 // variável local

global.b = 123 // variável global

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca
abc = 3 // não faça isso em casa!!! hehe
console.log(global.abc)