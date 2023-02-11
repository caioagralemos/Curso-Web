const btn = document.querySelector("#v2")

const h1 = document.querySelector("h1")

btn.onclick = function () {
    // versão 2
    alert("Funcionou")
}

h1.onmouseenter = function () {
    h1.style.textDecoration = "wavy"

}

h1.onmouseleave = function () {
    h1.style.textDecoration = "none"
}

h1.style.transition = "1s"

// versão 3

const button3 = document.querySelector("#v3")

// pesquisar Events no MDN para trabalhar com isso -
button3.addEventListener("mouseenter", () => {
    alert("tire o mouse de cima de mim!")
})

button3.addEventListener("click", () => {
    let nome = prompt("Tudo bem, você me venceu. Me diga seu nome:")
    alert(`Parabéns ${nome}, você conseguiu clicar em mim.`)
})

//  versão "4"

const tchutcha = document.querySelector("#tchutcha")

function tchu (){
    console.log("eu quero TCHU")
}
function tcha (){
    console.log("eu quero TCHA")
}
// executa apenas a primeira vez
tchutcha.addEventListener("click", tchu, {once: true})
tchutcha.addEventListener("click", tcha, {once: true})
// executa inumeras vezes
tchutcha.addEventListener("click", () => {
    console.log("Eu quero tchu tcha tcha tchu tchu tcha")
})


function colorize () {
    // função que pode ser passada em uma iteração
    cor1 = Math.ceil((Math.random() * 255))
    cor2 = Math.ceil((Math.random() * 255))
    cor3 = Math.ceil((Math.random() * 255))

    this.style.backgroundColor = `rgb(${cor1}, ${cor2}, ${cor3})`
}

let input = document.querySelector("input")
input.addEventListener("keydown", function (e) {
    console.log(e.key) // significado ex: Shift
    console.log(e.code) // tecla específica ex: ShiftRight

    if (e.code == "KeyQ") {
        alert("Você teclou Q!")
    }
})