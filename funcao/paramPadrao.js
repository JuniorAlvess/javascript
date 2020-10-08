// estratégia 1 para gerar valor padrão
function soma1 (a, b, c) {
    /**
    * caso as variáveis abaixo recebam um valor true, sará exibido. Caso recebam valor false, será 
    * exibido o valor padrão que nesse caso é 1
    */
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    // usando operador ternário
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão (es2015)
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))