/**
 * o filter é uma função callback que retorna true ou false,
 * recebe o índice atual e o array que você queira percorrer e no final retorna true ou false
 */
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 2199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)


const alunos = [
    {nome: 'Junior', materia: 'Português', nota: 9.5},
    {nome: 'Diego', materia: 'Português', nota: 5.1},
    {nome: 'João', materia: 'Matemática', nota: 8.1},
    {nome: 'Vitor', materia: 'Matemática', nota: 4.2}
]

const notas = aluno => aluno.nota >= 6.0
const nomes = aluno => aluno.nome

const aluno = alunos.filter(nomes).filter(notas)
console.log(aluno)