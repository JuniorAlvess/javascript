const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/**
 * o forEach percorre o array e sempre que um valor é encontrado ele
 * chama a function callback. Na function callback podem ser passados
 * três parâmetros nome, índice e array.
 *  caso queira ter acesso e exibir o índice, é obrigatório passar o primeiro parâmetro
 * para que o segundo seja o índice
 */
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// com arrow function
aprovados.forEach(nome => console.log(nome))
// a função está sendo armazenada em uma const e é exibida quando o foreach percorre o array
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)