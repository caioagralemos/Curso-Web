let link = document.querySelector('a')
link.parentElement // <p>...</p>
let paragrafo = links.parentElement
paragrafo.children // HTMLCollection [b,b,b,a,a,a,a] 4 links e 2 bolds
link.nextElementSibling // elemento que vem apos link
link.previousElementSibling // elemento que vem antes do link