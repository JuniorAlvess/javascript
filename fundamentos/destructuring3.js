/* o {} abaixo não é um objeto, a intenção é que
* assim que for passado um objeto, o {} desestruture e exibe o que está sendo solicitado 
*/
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 } // passando um objeto para max e min
console.log(rand(obj))
console.log(rand({ min: 955 })) // limitando apenas o min
console.log(rand({})) // chamando normalmente
// console.log(rand()) // erro