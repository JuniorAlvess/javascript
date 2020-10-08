function soma() {
    let soma = 0
    /**
     * toda função possui um array interno chamado arguments, que a partir dele você pode recuperar 
     * parâmetros passados a partir de chamadas da função.
    */ 
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log('a', 'b', 'c')