const imprimirResultado = function (nota) {
    // switch não retorna um valor true ou false, e sim algums tipos que você queira passar 
    switch (Math.floor(nota)){
        /*
        * Diferente do if, o switch lhe permite adicionar
        * quantas sentenças voce quiser dentro de um case.
        */
        case 10: 
        case 9: 
            console.log('Quadro de Honra')
            /*
            * o break serve para interromper o switch, caso o resultado for algum dos cases acima, o break 
            * interrompe o switch para que os cases abaixo não sejam executados.
            */
            break
        case 8: case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        // caso o valor inserido não esteja dentro do switch, ele simplismente não entra e o default exibe uma messagem
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)