const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// callback é quando você passa uma função e a mesma função será chamada quando um evento acontecer
// para cada elemento que o forEach achar dentro do array, ele chamara de volta a função (callback) imprimir
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


const nomes = ['Junior', 'Carol', 'Pedro', 'joão', 'Henrique']

console.log(nomes)

nomes.forEach(nome => console.log(nome))