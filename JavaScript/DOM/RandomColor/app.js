let corpo = document.querySelector("body")
corpo.style.alignItems = "center"
corpo.style.textAlign = "center"

let texto = document.querySelector('h1')
let botao = document.querySelector('button')

botao.addEventListener("click", () => {
    cor1 = Math.ceil((Math.random() * 255))
    cor2 = Math.ceil((Math.random() * 255))
    cor3 = Math.ceil((Math.random() * 255))
    soma = cor1 + cor2 + cor3

    texto.innerText = `rgb(${cor1}, ${cor2}, ${cor3})`

    corpo.style.backgroundColor = `rgb(${cor1}, ${cor2}, ${cor3})`

    if (soma < 140) {
        texto.style.color = "white"
    }
})