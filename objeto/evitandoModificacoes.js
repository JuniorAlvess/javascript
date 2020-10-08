// Object.preventExtensions - evita adicionar novos atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// Object.isExtensible() verifica se o objeto foi criado com Object.preventExtensions ou não
console.log('Extensílvel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' 
delete produto.tag
console.log(produto)

// Object.seal - evita adicionar/deletar atributos, mas é possivel alterar valores  
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes