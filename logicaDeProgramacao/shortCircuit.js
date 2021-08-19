/**
 * Operadores Lógicos
 * 
 * && -> false && true -> false "O valor sera false"
 * || -> true && false -> "vai retornar o valor verdadeiro"
 */

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;

//  Se o valor da const for false, será retornado apenas o valor
//  false e a função não será executada, se o valor da const for true a função será executada.
console.log(vaiExecutar && falaOi());

const corUsuario = 'Vermelho'
const corPadrao = corUsuario || 'preto'