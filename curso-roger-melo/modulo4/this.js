let user = {
  name: 'Kened',
  age:30,
  email: 'kened@email.com',
  city:'São Paulo',
  blogPosts:['Empadão de Frango', 'Receita de pure'],
  login: function(){
    console.log('Usuario logado')
  },
  logout: function(){
    console.log('usuario deslogado')
  },
  logBlogPosts: function(){
    console.log(`${this.name} escreveu os seguintes posts: `)
    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }

}

user.login()
user.logout()
user.logBlogPosts()