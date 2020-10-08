let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
/** 
 * o sinal de negação '!' adicionado duas vezes faz com que o resultado se torne true, 
 * caso contrário o resultado de isAtivo seria apenas "1" 
*/ 
console.log(!!isAtivo) 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')

let nome = 'Junior'
console.log(nome || 'Desconhecido')