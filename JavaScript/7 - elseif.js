const suaNovaSenha = prompt("digite sua nova senha").toLowerCase()

if (suaNovaSenha.length < 6) {
    console.log("senha inválida! muito pequena")
}
else {
    if (suaNovaSenha.indexOf(' ') !== -1) {
        console.log("senha inválida! contém espaços")
    }
    else {
        console.log("tudo certo!")
        senha = suaNovaSenha
    }
}
