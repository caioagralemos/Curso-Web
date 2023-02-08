// Strings

// Declaração
var nome = "Caio"

// é possível usar aspas simples OU duplas
var senha = 'umdoistresquatro!'

// strings em JS tem indexação - pegando a letra i em Caio
var letrai = usuario[2]

// é possível somar strings
var sobrenome = "Lemos"
var nomecompleto = "Caio" + " " + "Lemos"

// somar numero com string transforma número em string
1 + nomecompleto // 1Caio Lemos

// Métodos

// metodo lenght - retorna o tamanho
var tamanhosenha = senha.length

// metodo toUpperCase - retorna a string toda maiúscula
nomecompleto.toUpperCase()

// metodo toLowerCase - retorna a string toda minúscula
nomecompleto.toLowerCase()

// metodo trim - tira todos os espaços das extremidades de uma string
var saudacao = "       olá        "
saudacao.trim()

// é possível agrupar métodos
saudacao.trim().toUpperCase()

// Métodos em que é necessário passar argumentos

// metodo indexOf
senha.indexOf('!') // 16

// metodo slice (.slice(beginIndex, endIndex))
senha.slice(3) // doistresquatro!
// endIndex é opcional e é uma index a mais do que o último que você quer
senha.slice(3, 8) // dois
// também é possível utilizar indices negativos
senha.slice(-7) // quatro!

// metodo replace - troca a primeira instancia de um parametro passado por outro parametro passado
nomecompleto.replace("Lemos", "Agra") // Caio Agra

// metodo repeat - repete a string passada um numero de vezes passado por parâmetro
"lol".repeat(4) // lollollollo 

// Formatação de Strings em JS
// para isso, utilizamos `essas aspas esquisitas` que ficam em cima do tab
// dentro dessas abas, usamos ${var} para indicar a variável
let stringfinal = `Nome = ${nomecompleto}\nSenha = ${senha}`

// Null
// ausencia intencional de um valor, precisa ser atribuido
let nada = null

// Undefined
// variáveis que não foram atribuidas nenhum valor
let oxe;