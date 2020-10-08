const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(cumprirPromesa) {
    cumprirPromesa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
// o then passa o resultado para o próximo e assim por diante
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)

