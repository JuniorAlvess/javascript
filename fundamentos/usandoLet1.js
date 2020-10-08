// Variáveis definadas com a palavra reservada 'let' tem escopo global, função e bloco
let numero = 1
{
    /** 
     * mesmo este bloco não sendo por exemplo uma função, a variável 
     * com a palavra reservada let será definida somente aqui dentro 
    */
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)