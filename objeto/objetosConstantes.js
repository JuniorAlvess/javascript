/**
 * A constante aponta para um determinado endereço de memoria,
 * o endereço de memoraria aponta para um determinado objeto, 
 * entao quando você atribui um valor para um objeto que foi declarado como const,
 * a const não está sendo alterada e sim o objeto
 * EXEMPLO 
 * pessoa -> 123 -> {...} 
 * */  

 const pessoa = {nome: 'João'}
 pessoa.name= 'Pedro'
 console.log(pessoa)

 /**
  * O object.freezer faz com que o objeto em si não possa
  * ser alterado de maneira alguma, nem mesmo deleta-lo
  */
 Object.freeze(pessoa)

 // Os exemplos abaixo não geraram erros, apenas não ocorre nenhuma alteração no objeto     
pessoa.name = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.name

console.log(pessoa.name)
console.log(pessoa)

// criando um objeto que não pode ser alterado desde o início
const pessoaConstate = Object.freeze({name: 'Pedro'})

pessoaConstate.name = 'Maria'
console.log(pessoaConstate)
