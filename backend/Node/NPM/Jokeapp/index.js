const jokes = require("give-me-a-joke") //importando modulos usamos apenas o nome e nao o dir
jokes.getRandomDadJoke((joke) => {
    console.log(joke)
})