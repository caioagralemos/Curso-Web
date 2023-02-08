// - MÉTODO setTimeout - espera um tempo antes de soltar uma função

setTimeout(() => {
    // 2 parâmetros, func a ser executada e tempo em milisegundos antes de soltar
    console.log("Are you still there?")
}, 5000)

// MÉTODO setInterval - similar a setTimeout, repete uma função a cada intervalo de tempo

sec = 0
const meuintervalo = setInterval(() => {
    // clearInterval(meuintervalo) - para o intervalo
    console.log(sec)
    sec += 1
}, 1000)