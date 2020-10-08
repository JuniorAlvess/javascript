function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/**
 * Diferente do objeto, quando se trata de array, não é passado os nomes e sim valores, 
 * que serão guardados de acordo com a sequência
*/
console.log(rand([50, 40])) // min, max
console.log(rand([992])) // apenas min
console.log(rand([, 10])) // apenas o max
console.log(rand([])) // valores originais
// console.log(rand()) // erro