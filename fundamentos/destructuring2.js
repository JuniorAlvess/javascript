// quando for desestruturar um array deve-se tomar cuidado,
// pois o destructuring [] fica posicionado na esquerda e o array a direita.

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)