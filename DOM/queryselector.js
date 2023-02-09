// query selector é a melhor forma de dar um select em um document html
// a sintaxe do parâmetro a ser passada é a mesma de css

document.querySelector(".doc") // retorna o primeiro da classe doc
document.querySelectorAll("img") // retorna todas as imagens
document.querySelector("#french:nth-of-type(2)") // retorna o segundo elemento com id french

// ex

let imagens = document.querySelectorAll('img')
for (i of imagens) {
    i.src = 'https://pbs.twimg.com/profile_images/1426997215097147399/IdnAl8Ll_400x400.jpg'
}

