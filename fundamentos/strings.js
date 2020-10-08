const escola = "Cod3r"

console.log(escola.charAt(4)) // buscando o índice da string
console.log(escola.charAt(5)) // retorna um valor vazio, pois não existe esse índice na string
console.log(escola.charCodeAt(3)) // buscando o valor do índice de acordo com a tabela unicode
console.log(escola.indexOf('3')) // para saber em qual índece está a palavra ou frase

console.log(escola.substring(1)) // exibira a palavra a partir do índice específicado
console.log(escola.substring(0, 3)) // exibira o resultado do índice 0 até o índice 3, mas o índice 3 não será exibido

console.log('Escola '.concat(escola).concat("!")) //concatenando
console.log('Escola ' + escola + "!") //concatenando
console.log(escola.replace(3, 'e')) // substitiu o número 3 de cod3r pela letra "e"  

console.log('Ana,Maria,Pedro'.split(',')) // transformado string em array