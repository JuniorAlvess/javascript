const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

/**
 * O valor exibido será Global, pois como não há
 * nenhuma variável dentro de minhaFuncao chamada
 * "global", ela vai procurar fora do próprio escopo
 * e exibira o resultado encontrado.
 */
exec()