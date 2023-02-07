// let contador = 0
// while (contador < 10){
//     contador++
//     console.log(contador)
// }

// senha = prompt("sua senha:").toLowerCase()
// while (senha != "baby hippo"){
//     senha = prompt("senha incorreta! tente novamente:").toLowerCase()
// }
// alert("você desbloqueou o segredo do baby hippo!")

let input = prompt("Fala comigo bb")
while(true){
    input = prompt(input)
    if (input.toLowerCase() === "pare de me imitar"){
        break
    }
}
alert("Tudo bem, você venceu.")