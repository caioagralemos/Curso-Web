let nome = "Caio"
let numero = "12"

function grito(argumento) {
    try {
        return argumento.toUpperCase().repeat(3)
    } catch {
        console.log("Passe uma string, por favor!")
    }
}

