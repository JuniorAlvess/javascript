// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/* 
* os {} representam o destructuring, a const abaixo está 
* sendo retirada do objeto pessoa, o console.log está exibindo
* apenas o nome e idade do objeto pessoa
*/
const { nome, idade } = pessoa
console.log(nome, idade)

/*
* neste exemplo, além de retirar o nome e a idade do objeto pessoa,
* está armazenando eles dentro de variáveis
*/
const { nome: n, idade: i } = pessoa
console.log(n, i)

// caso queira retirar algum valor que não existe no objeto resultado será exibido undefined
const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada)

// Buscando um atributo dentro do outro.

// a const abaixo está buscando os atributos logradouro, numero e cep de dentro de pessoa
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/* 
* Cuidado quando for acessar atributos aninhados dentro do objeto,
* pois se algo estiver errado será gerado um erro.
*/