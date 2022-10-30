//Arrays
let heroes = ['BAtman', 'CatWoman', 'Iron Man']
const ages = [31,25,39,40]
const ramdomArray = ['Parker', 'Diana', 19, 18]
heroes[2] = 'Spider-Man'

console.log(heroes);

//metodos de arrays
//Join - Retorna uma string com os itens dos arrays, pode receber um parametro separador
const joinHeroes = heroes.join('|')

//IndexOf - Traz o indice da primeira ocorrencia do array
const indexOf25 = ages.indexOf('25')

//Concat - Concatena itens ao array
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])

//Push - Adiciona itens ao final do array
const pushToHeroes = heroes.push('Cyclops', 'Hulk')

//Pop - retira um item do final do array
const popHeroes = heroes.pop()

console.log(joinHeroes);
console.log(moreHeroes)
