const alunos = [
    { nome: 'João', nota: 7.3, bolsistas: false},
    { nome: 'Maria', nota: 9.2, bolsistas: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: false}
]

// o reduce recebe uma callback que vai ter o acumulado e o atual
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)