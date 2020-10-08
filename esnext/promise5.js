function funcionarOuNão(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNão('Testando...', 0.3)
    .then(v => `valor ${v}`)
    .then(
        v => console.log(v),
        // se o erro já estiver tratado dentro de um then, o catch não será chamado, mas não terá os valores disponiveis para os próximos then
        err => console.log(`Erro Esp.:${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro: ${err}`)) // tratamento ideal
    .then(() => console.log('Fim!'))