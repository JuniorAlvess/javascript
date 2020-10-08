console.log(typeof Array, typeof new Array, typeof [])

// Forma não recomendada 
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Forma recomendada - Literal
aprovados = ['Bia', 'Carlos', 'Ana']

// buscando elementos através dos índices
// os índices sempre iniciam a partir do 0
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // o índice 3 não existe dentro deste array, mas não será gerado erro, apenas undefined

// forma válida de atribuir um novo elemento para um array
aprovados[3] = 'Paulo'
aprovados.push('Abia')

// length exibe o comprimento do array
console.log(aprovados.length)

aprovados[9] = 'Rafael' // todos os índices a partir do 5 ao 8 serão undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)// true

console.log(aprovados)

// a função sort() exibira o array de uma maneira ordenada
aprovados.sort()
console.log(aprovados)

// deletando elementos a partir do índice
delete aprovados[1] // o índice 1 passou a ser undefined 
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// a função splice adiciona/remove elementos 

aprovados.splice(1, 1) // excluindo apenas o índice 1