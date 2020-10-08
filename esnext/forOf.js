for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// apenas chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// apenas valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// desestruturando
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// percorrendo um set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}