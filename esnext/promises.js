function falarDepoisDe(segundos, frase) {
    /*
     * A promise tem dois parâmetros 
     * resolve = quando uma promessa é resolvida/atendida
     * reject = quando a promesa é rejeitada 'error'
     */
    return new Promise((resolve, reject) => {
       // simulando uma operação assincrona
        setTimeout(() => {
            resolve(frase)
        },segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    // acessando o resultado de uma promise atendida de forma correta
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    // tratando o caso  
    .catch(e => console.log(e))