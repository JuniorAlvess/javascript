function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))// como não foi passado o segundo parâmetro, se tornou undefined
console.log(area()) // NaN
console.log(area(2, 3, 17, 22, 44)) // exibira os dois primeiros parâmetros e os outros valores serão ignorados.
console.log(area(5, 5))