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