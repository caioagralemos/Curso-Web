const h1 = document.querySelector("h1")
const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("ul")
const body = document.querySelector("body")
form.addEventListener("submit", function (e){
    e.preventDefault() // impede a página de fazer o que ela faria por padrao
    const nome = input.value
    if (nome != ""){
    const newli = document.createElement("li")
    newli.innerText = nome
    list.append(newli)
    input.value = "" // reseta o texto do input
    h1.innerText = "Enter your name"
    } else {
        alert("Não é possível inserir um nome vazio.")
    }
})

input.addEventListener("input", () => {
    console.log("algo mudou no seu input!")
    h1.innerText = `Welcome, ${input.value}`
    if (input.value === ""){
        h1.innerText = "Enter your name"
    }
})

input.addEventListener("change", () => {
    // aqui, se clicarem na input e digitarem algo, quando clicarem fora vai ativar isso
    console.log("entraram algo no seu input!")
})

list.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
        // se o target do click na ul for um li, exclua o li
        e.target.remove()
    }
})

body.style.fontFamily = "SF Pro"