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