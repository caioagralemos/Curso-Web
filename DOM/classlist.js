let li = document.querySelectorAll("li")
for (let eli of li) {
    // highlight é uma classe. aplicando esse toggle, as características
    // dessa classe começam a se aplicar ao item aplicado
    eli.classList.toggle("highlight")
}