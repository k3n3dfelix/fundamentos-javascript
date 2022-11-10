//Function declaration
function sayHi () {
  console.log('oi')
}

//function expession
const showFood = function(){
  console.log('pizza')
}

sayHi()
showFood()

//Argumentos, parametros e default paramters
const myFunc = function (name = 'Kened', lastName = 'Felix') {
  console.log(`Oi, ${name} ${lastName}`)
}

myFunc('Maria')

//Retornando valores
const double = function (number) {
  const doubleResult = number * 2
  return doubleResult
}

const result = double(3)
console.log(result)

//Arrow Function 

const doubles = (number) => {
  return number * 2
}

const name = 'Kened'

//Diferença entre método e função é a forma que o invocamos e como é declarado
//Funcoes 
const sayHis = () => 'Oi'
const greet = sayHis()

console.log(greet);

//métodos
name.toUpperCase()  

//ForEach e callbacks
const myFuncs = callback => {
  const value = 77

  callback(value)
}

myFuncs(number => {
  console.log(number)
})


const socialNetworks = ['youtube', 'twitter', 'instagram','facebook']

const logArrayInfo = (socialNetwork, index, array) => {
  console.log(index, socialNetwork, array);
}
socialNetworks.forEach(logArrayInfo)