const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// O for in percorre os índices do array e não os valores
for (let i in notas) {
    console.log(i, notas[i])
}

// buscando atributos de um objeto com for in
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}