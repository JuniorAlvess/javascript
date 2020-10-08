// o break funciona dentro de switch, laço for e while
// o continue funciona dentro de laço for e while
// é uma boa evitar usá-los...

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        /*
        * o break não tem influência no if, e sim no laço mais próximo a ele, quando for executado
        * o break vai interromper o laço for.
        */
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    /*
    * o continue interrompe apenas a repetição corrente e executa a próxima repetição
    */
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// Evite usar
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo // o rótulo 'externo' faz com que quando a condição for verdadeira o break influencie o for rótulado, ou seja, o primeiro for.
        }
        console.log(`Par = ${a},${b}`)
    }
}