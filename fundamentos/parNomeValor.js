// par nome/valor
// contexto = local onde a variável é definida fisícamente no código
// léxico = em que local fisíco do código foi definido (par none/valor), no arquivo.
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)