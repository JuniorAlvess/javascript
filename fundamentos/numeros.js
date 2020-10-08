/** 
 * 1.0 em JavaScript é considerado um valor inteiro, mas 1.1 e assim por diante deixará de ser um valor 
 * inteiro e passara a ser float, essa regra tambem se aplica no peso2.
*/
const peso1 = 1.0 

//Number com o 'N' maiúsculo é uma função e number com 'n' minúsculo é um tipo númerico
const peso2 = Number('2.0') 

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // para saber se peso1 é um valor inteiro. RES = true
console.log(Number.isInteger(peso2)) // RES = true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(Math.round(media)) // arredondando o valor
console.log(media.toFixed(2)) // buscando casas decimais escolhidas
console.log(media.toString(2)) // Converte o resultado em números binários
console.log(typeof media) // exibindo o tipo do resultado

