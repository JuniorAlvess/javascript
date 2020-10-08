const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]
console.log(carrinho)

// retornando um array apenas com o preço.

const paraObjeto = json => JSON.parse(json)
const apenas_preco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenas_preco)
console.log(resultado)