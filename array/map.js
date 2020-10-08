const nums = [1, 2, 3, 4, 5] 

// For com propósito
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
// replace() está sendo usado para substituir o '.' por ','
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

// soma10 está adicionando mais 10 ao array
// triplo está multiplicando o valor somado por 3
// paraDinheiro está convertendo o resultado para dinheiro
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)