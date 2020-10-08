/*
* Hoinsting é um comportamento padrão do javascript de mover a declaração para o topo.

* Como o JavaScript possui hoinsting o valor
* impresso no primero console.log será undefined,
* porque mesmo a variável sendo criada uma linha abaixo,
* o hoinsting faz com que o primeiro console pegue está variável
* e a exiba em tela, mas o valor da variável só é exibido em tela 
* no console 2, lembrando que o efeito de hoinsting só ocorre com var.
*/

console.log('a =', a)
var a = 2
console.log('a =', a)