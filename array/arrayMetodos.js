const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// A função pop() remove o último elemento do array
pilotos.pop()
console.log(pilotos)

// A função push() adiciona um novo elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos)

//A função shift() remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//A função unshift() adiciona um novo elemento no primeiro índice do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// A função splice() pode adicionar e remover elementos

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionando elementos a partir do índice 2
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removendo a partir do índice 3 apenas 1 elemento
console.log(pilotos)

// A função slice() retorna um novo array a partir do índice
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

// pegará todos os índices a partir do 1 até o 4, mas o índice 4 não entrara no outro array
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
