// Arrow Function
const soma = (a, b) => a +b
console.log(soma(2, 3)) 

// Arrow Function 
const lexico1 = () => console.log(this === exports)
// tentando fazer com que a const lexico1 aponte para outro objeto
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n) 
    return total 
}
console.log(total(2, 3, 4, 5))