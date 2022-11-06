//1
console.log(true,false)

console.log(!true, !false)

//2 
const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopotamo', 'leao']

let Leaoexists = false

let teste = animals.includes('leao')
if(!animals.includes('leao')){
  console.log('Leão não existe no array')
}else{
  console.log('Leão existe no array')
}
console.log(teste)

//3
const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let sumTotal  =0
for(let i = 0; i < randomNumbers.length; i++){
  sumTotal += randomNumbers[i]

  if(sumTotal > 400){
    console.log(`A soma ultrapassou 400. Até aqui , o valor atual é ${sumTotal}`)
    break
  }
}

//4 
const sentence = ['A', 'certeza', 'duvida', 'é', 'o', 'princípio', 'da', 'sabedoria']
let newSentence = '';
for(let i = 0; i < sentence.length; i++){
  if(sentence[i] !== 'certeza'){
    newSentence += `${sentence[i]} `
  }
}

console.log(newSentence)