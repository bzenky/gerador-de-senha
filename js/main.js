const senha = document.querySelector('.senha')
const gerar = document.querySelector('.gerar')

function criarSenha() {
  senha.innerHTML = ''
  const alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numerais = "0123456789"
  const especiais = "!@#$%&()*+,-./"
  const variaveis = alfabeto + numerais + especiais


  for (let cont = 0; cont <= 7; cont++) {
    senha.innerHTML += variaveis[Math.floor(Math.random() * variaveis.length)] 
  }
}

gerar.addEventListener('click', criarSenha)
