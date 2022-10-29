//inteiros e decimais
const radius = 10
const pi = 3.14

console.log(radius, pi)
//Operadores aritimeicos
const reminder = 5 % 2

console.log(reminder)

//ordem de operações
//1 Parenteses
//2 expoentes ou raizes
//3 multiplicação e divsão
//4 adição ou subtração

const crazyOperation = 5 * (10 - 3) ** 2
console.log('crazyOperation', crazyOperation)

//operadores de incremento e decremento
let postLikes = 10
postLikes++
console.log('postLikes', postLikes)
postLikes--
console.log('postLikes', postLikes)

//operadores addition, subtaction, multiplication e division


//Nan - not a number
console.log(7 / 'oi')
//concatenação de string com número
const likesMessage = 'O post tem ' + postLikes + ' likes.'
console.log(likesMessage)