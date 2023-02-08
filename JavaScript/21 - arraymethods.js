// - MÉTODO forEach - serve para rodar uma função para cada argumento em um array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function print(element) {
    // era muito usado antes
    console.log(element)
}

// numbers.forEach(print)

numbers.forEach(function (num) {
    if (num % 2 == 0) {
        // console.log(num)
    }
})

// - MÉTODO MAP - cria um novo array com o resultado do callback em cada elemento da função

sqrNumbers = numbers.map(function (num) {
    return num * num
})

print(sqrNumbers)

// - MISTURANDO MÉTODOS COM ARROW FUNCTIONS

const areNumbersOdd = numbers.map((num) => (
    num % 2 != 0
))

// - MÉTODO FILTER - cria um novo array com elementos que passam por um teste implementado pela função

const movies = [
    {
        title: "Shrek",
        score: 90,
        year: 2002
    },
    {
        title: "Toy Story",
        score: 99,
        year: 2001
    },
    {
        title: "Sausage Party",
        score: 30,
        year: 2020
    },
    {
        title: "Puss in Boots",
        score: 64,
        year: 2013
    },
    {
        title: "Puss in Boots 2",
        score: 90,
        year: 2022
    },
    {
        title: "Zootopia",
        score: 74,
        year: 2017
    }
]

const goodMovies = movies.filter((m) => (
    m.score > 75
))

const recentMovies = movies.filter(m => m.year >= 2020)

movies
    .filter(m => m.score > 80)
    .map(m => m.title)
    // para fins de pesquisa podemos fazer isso
    
// MÉTODO SOME - retorna um valor booleano se algum elemento do array passa em um teste implementado pela função

numbers.some(num => (
    num > 19 // true
))

// MÉTODO EVERY - retorna um valor booleano se todos os elementos do array passam em um teste implementado pela função

numbers.every(num => (
    num > 19 // false
))

// MÉTODO REDUCE - executa uma função em cada elemento do array até fazer o array ter um só elemento