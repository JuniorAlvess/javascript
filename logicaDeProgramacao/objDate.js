// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umdia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix.

// O índice do mês um é 0, ou seja, o 0 = 1 e 11 = 12
// const data = new Date(2019, 3); // a, m, d, h, M, s, ms

// Um valor do tipo String que representa uma data. A string deverá estar em um formato reconhecido pelo método Data.parse.
// const data = new Date('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // O mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 = Domingo, 6 = Sábado
// console.log(data.toString());
// console.log(Date.now()); // Retorna o valor numérico correspondente ao tempo corrente - o número de milissegundos passados desde 1 de Janeiro de 1970 00:00:00 UTC.
 
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano}/${hora}/${min}/${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)