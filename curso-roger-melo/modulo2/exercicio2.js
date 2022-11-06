const atualHour = 2

if(atualHour < 12){
  console.log('Bom Dia!')
}else if(atualHour >= 12 && atualHour < 18){
  console.log('Boa Tarde!')
}else{
  console.log('Boa Noite!')
}

const age = 7;

if(age <= 7 || age >=65){
  console.log('Para você, a entrada é gratis')
}else{
  console.log('A entrada é 30');
}

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76,99]
let newArray = []
for(i =0 ;i < numbers.length; i++){
    if(numbers[i] >= 11 && numbers[i] <= 90){
      newArray.push(numbers[i])
    }
}

console.log(newArray);

let isNumber = 0
let isBoolean = 0
let isString = 0

const crazyArray = [true, 869, 'oi', 71,false, 83, '35', true, 397, 'js', false]

for(i =0; i< crazyArray.length; i++){
  const typeOfItem = typeof crazyArray[i]
  const isItemANumber = typeOfItem === "number"
  const isItemABoolean = typeOfItem === "boolean"

  if(isItemANumber){
    isNumber++;
  }else if(isItemABoolean){
    isBoolean++;
  }else{
    isString++;
  }
}

console.log(`O CrazyArray tem ${isNumber} números, ${isBoolean} booleans e ${isString} strings`)

const ramdomNumbers = [73,4,67,10,31,58]

const arrayPar = [];
const arrayImpar = [];

for(i=0; i<ramdomNumbers.length; i++){
  if(ramdomNumbers[i] % 2 === 0){
    arrayPar.push(ramdomNumbers[i])
  }else{
    arrayImpar.push(ramdomNumbers[i])
  }
}

console.log(arrayPar);
console.log(arrayImpar);

console.log(`Numeros impares: ${arrayImpar.join(', ').replace(', 3', ' e 3')}. Números pares: ${arrayPar.join(', ').replace(', 5', ' e 5')}`)