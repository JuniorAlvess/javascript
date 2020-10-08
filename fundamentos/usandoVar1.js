// Variáveis definidas com a palavra reservada "var" tem apenas escopo global e função 
{
    {
        {
            {
                var sera = 'Será????'
                console.log(sera)
            }
        }
    }
}

console.log(sera) // a variável mesmo estando fora de um bloco comum, pode ser exibida ou alterada, pois se torna global

function teste() {
    var local = 123
    console.log(local)
}

teste()

/** 
 * aqui será gerado um erro, pois quando a variável está por exemplo dentro de uma função 
 * ela se torna uma variável local e só pode ser usada dentro da função
*/
console.log(local) 