const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        /** 
         * O this neste caso é o obj pessoa, sem o this seria gerado um erro por causa da variável saudacao que não está definida
         * dentro do bloco.
        */
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e OO

// usando o bind, sempre que você refência o this, ele será o objeto que foi passado para a função bind.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()