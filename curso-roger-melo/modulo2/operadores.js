const password = 'oi123121231fes21469'

if(password.length >=12 && password.includes('9')){
  console.log('Senha muito forte')
} else if(password.length >= 8 || password.includes('1') && password.length >=5){
  console.log('Essa senha tem 8 ou mais caracteres')
} else {
  console.log('A senha deve conter 8 ou mais caracteres')
}