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

// - REST PARAMS

const medalhas = (gold, silver, ...everyoneElse) => {
    console.log(`GOLD MEDALIST: ${gold}\nSILVER MEDALIST: ${silver}\nAnd thanks for ${everyoneElse} for participating!`)
}
