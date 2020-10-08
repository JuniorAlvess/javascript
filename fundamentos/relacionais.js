console.log('01)', '1' == 1) // igual, true
console.log('02)', '1' === 1) // estritamente igual, false
console.log('03)', '3' != 3) // diferente, false
console.log('04)', '3' !== 3) // estritamente diferente, true

console.log('05)', 3 < 2) // menor, false
console.log('06)', 3 > 2) // maior, true
console.log('07)', 3 <= 2) // menos ou igual, false
console.log('08)', 3 >= 2) // maior ou igual, true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false
console.log('10)', d1 == d2) // false
console.log('11)', d1.getTime() === d2.getTime()) // false

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false