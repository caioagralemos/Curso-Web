// - Array destructuring:

const raceResults = ["Red Bull", "Mercedes", "Ferrari", "Haas", "Aston Martin", "Alfa Romeo", "McLaren", "AlphaTauri", "Williams", "Alpine"]

const [raceWinner, second, third, ...everyoneElse] = raceResults;
// Position based
raceWinner // "Red Bull"
second // "Mercedes"
third // "Ferrari"
everyoneElse // "Haas", "Aston Martin", "Alfa Romeo", "McLaren", "AlphaTauri", "Williams", "Alpine"

// - Object destructuring:

const usuario = {
    email: 'caio@mail.com',
    password: '12345',
    firstName: 'Caio',
    lastName: 'Lemos',
    city: 'Maceió',
    country: 'Brazil'
}

// forma tradicional
const mail = usuario.email
// destructuring
const { email, password, firstName }  = usuario
email // caio@mail.com
password // 12345
firstName // Caio
// cria uma variável com nome definido + default value
const { country: nationality, state = "Não foi informado" } = usuario
// country // Uncaught ReferenceError: country is not defined
nationality // Brazil

// - Param destructuring:
// utilizamos quando, ao iterar um objeto em uma função, só precisamos de poucos elementos do mesmo

function descricao ({firstName, lastName, city, country}) {
    return `Meu nome é ${firstName} ${lastName}, e eu sou de ${city}, ${country}.`
}

