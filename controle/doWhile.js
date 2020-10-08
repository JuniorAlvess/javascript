function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

// com o 'do' é garantido que o bloco seja executado pelo menos uma primeira vez, só depois ele entra no while.
do {
    opcao = (getInteiroAleatorio(-1, 10))
    console.log(`Opção escolhida foi ${opcao}`)
} while(opcao != -1)

console.log('Até a próxima')