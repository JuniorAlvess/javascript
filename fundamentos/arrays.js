const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) //Exibe a quantidade de índices contidos no array

valores.push({id: 3} , false, null, 'teste') // push() serve para adicionar novos elementos dentro do array

console.log(valores.pop()) // a função pop() retira o último valor do array e o exibe 
delete valores[0] // delete - deleta índices especificos do array, funciona em object.
console.log(valores)

console.log(typeof valores)