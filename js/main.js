const senha = document.querySelector('.senha')
const gerar = document.querySelector('.gerar')
const copiar = document.querySelector('.copiar')
const toasty = document.querySelector('.toasty')

function criarSenha() {
  senha.value = ''
  const alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numerais = "0123456789"
  const especiais = "!@#$%&()*+,-./"
  const variaveis = alfabeto + numerais + especiais

  copiar.classList.add('visible')

  for (let cont = 0; cont <= 7; cont++) {
    senha.value += variaveis[Math.floor(Math.random() * variaveis.length)] 
  }
}

gerar.addEventListener('click', criarSenha)


function copiarSenha() {
  const senha = document.querySelector('.senha');

  
  senha.select()
  senha.setSelectionRange(0, 99999)
  
  document.execCommand("copy")
  
  toasty.classList.add('active')

  setTimeout(() => {
    toasty.classList.remove('active')
  }, 1200)

}

copiar.addEventListener('click', copiarSenha)


