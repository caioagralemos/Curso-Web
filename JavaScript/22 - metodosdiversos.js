// - MÉTODO setTimeout - espera um tempo antes de soltar uma função

setTimeout(() => {
    // 2 parâmetros, func a ser executada e tempo em milisegundos antes de soltar
    console.log("Are you still there?")
}, 5000)

// - MÉTODO setInterval - similar a setTimeout, repete uma função a cada intervalo de tempo

sec = 0
const meuintervalo = setInterval(() => {
    // clearInterval(meuintervalo) - para o intervalo
    console.log(sec)
    sec += 1
}, 1000)

clearInterval(meuintervalo)

// - DEFAULT PARAMS - é atribuir um valor default para o caso em que o parametro pedido não seja passado

const rollDie = (sides = 6) => {
    return Math.floor((Math.random() * sides) + 1) 
}

const greet =  (person, msg = "Olá") => {
    // sempre que for definir um valor default, coloque ele na(s) últimas posições, pois a ordem continua importando
    return `${msg}, ${person}!`
}

// - FUNÇÃO SPREAD - expande um array em um conjunto de elementos

const numbers = [1,2,3,4,5,6,7,23,44,3,345,234,223,4353]
Math.max(numbers) //  retorna NaN pois pede multiplos ints como parâmetro
Math.max(...numbers) // essa é a sintaxe, faz o array numbers entrar como várias ints e não como array

// console.log(numbers) Array(14) [ 1, 2, 3, 4, 5, 6, 7, 23, 44, 3, … ]
// console.log(...numbers) 1 2 3 4 5 6 7 23 44 3 345 234 223 4353

// - USANDO SPREAD PARA COMBINAR ARRAYS

const gatos = ["Persa", "Siamês", "Sphynx"]
const caes = ["Bulldog", "Pitbull", "Golden Retriever", "Labrador"]
const todosAnimais = [...caes, ...gatos]

// - USANDO SPREAD COM OBJETOS - funciona como um método de uma espécie de herança, depositando todos os dados
// de um objeto 1 em um objeto 2 que contém as mesmas e mais propriedades

const conta = {
    username: "caiolemos",
    password: "12345"
}

const fullAccount = {
    // Object { username: "caiolemos", password: "12345", email: "caioagralemos@live.com", phone: "991220020" }
    ...conta,
    email: "caioagralemos@live.com",
    phone: "991220020"
}
