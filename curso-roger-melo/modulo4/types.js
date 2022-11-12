//Valores Primitivos

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

//Valores de referencia

let userOne = {name: 'Kened', age: 30}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 32

console.log(userOne, userTwo)