colors = require("colors")
figlet = require("figlet")
tamanho = "Nonstop"


async function rainbow(letra){
    await figlet(letra, function(err,data) {
        if (err) {
        console.log("404")
        }
        console.log(data.rainbow)
    })
}

for (let index = 0; index < 12; index++) {
    rainbow(tamanho)
}