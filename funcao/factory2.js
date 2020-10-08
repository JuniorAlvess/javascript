function criarProduto(nome, preco) {
        return {
           nome,
           preco,
           desconto: 0.1 
       }
}


console.log(criarProduto('televisão', 1000))
console.log(criarProduto('geladeira', 2000))
