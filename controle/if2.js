function teste1(num) {
    /*
    * no caso do if o uso do bloco é opcional. O código
    * abaixo será exibido sem erro, mas o único console
    * que está associado ao if é o 'console.log(num), pois
    * quando o if não tem nenhum bloco, apenas uma única sentença 
    * fica associada ele.
    */
    if (num > 7) 
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // cuidado com o ';', não usar com as estruturas de controle 
        console.log(num)
    }
}

teste2(6)
teste2(8)