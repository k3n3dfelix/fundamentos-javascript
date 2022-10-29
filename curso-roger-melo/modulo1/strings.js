//STRINGS
console.log('Heloo World')
const email = "kened@email.com"
console.log(email)

//Concatenção strings
const firstName = "Kened"
const lastName = "Felix"
const fullName = firstName + ' ' + lastName

console.log(fullName)

//acessando caracteres
console.log(fullName[0])

//comprimento de uma string
console.log(fullName.length)

//metodos de string
console.log(fullName.toUpperCase())

const result = fullName.toLowerCase()

console.log(result);

//METODOS COMUNS DE STRINGS
//.indexOf - Traz a posição do array na string para a o ocorrencia passada
const index = email.indexOf('@') //
console.log(index);

//.lastIndexOf - Traz a ultima posição do ultimo elemente encontrado no array na string
  const email2 = 'kened@email.com'
  const lastIndexOfE = email2.lastIndexOf('e')
  console.log(lastIndexOfE)



//.slice - Corta a string a partir da posição indicada e quantidade de posições
  const email3 = 'laracroft@email.com'
  const emailSlice = email3.slice(0,9)
  console.log(emailSlice)

//.replace - Substitui um caractere por outro - recebe dois argumentos o que sera substituido e pelo que será substituido
const emailReplace = email3.replace('l','y')
console.log(emailReplace)

//Template Strings
const postTitle = "É bolacha ou biscoito?"
const postAuthor = "Kened Felix"
const postComment = 15

//usando concatenação
const postMessage = 'O post "'+ postTitle + '" do ' + postAuthor + ', tem ' + postComment + ' comentarios'
console.log(postMessage)

//Usando template Strings
const postMessage2 = `O post "${postTitle}" do ${postAuthor}, tem ${postComment} comentários`
console.log(postMessage2)

//Criando templates HTML
const html = `
  <h2>${postTitle}</h2>
  <p>${postAuthor}</p>
  <span>Este post tem ${postComment} comentários</span>
`
console.log(html);

