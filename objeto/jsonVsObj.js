const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
/** 
 * em JSON a soma não é executada, pois são apenas dados que estão trafegando de 
 * uma aplicação para autra, ou seja, é apenas um formato textual 
*/
 console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) // não é valido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) // não é valido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))