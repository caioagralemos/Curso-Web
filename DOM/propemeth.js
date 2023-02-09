let links = document.querySelectorAll('a')
for (let link of links) {
links.innerText = Olá // propriedade que muda o texto
}

let paragrafos = document.querySelectorAll('p')
for (let par in paragrafos) {
    console.log(par.innerHTML)
    // com essa função innerHTML dá pra alterar não só o texto, mas todo o html
// It is unknown exactly where or when these fowl with their singular combination of attributes first appeared, but
// the most well documented point of origin is ancient China (hence another occasionally encountered name for the
// bird, <b>Chinese silk chicken</b>). Other places in <a href="/wiki/Southeast_Asia" title="Southeast Asia">link</a> have been named as possibilities, such as India and <a href="/wiki/Java" title="Java">link</a>.<sup id="cite_ref-Ekarius_2-0" class="reference"><a href="#cite_note-Ekarius-2">link</a></sup> The earliest surviving written account of Silkies
// comes from <a href="/wiki/Marco_Polo" title="Marco Polo">link</a>, who wrote of a "furry chicken" in the
// 13th century during his travels in Asia.<sup id="cite_ref-Graham_3-0" class="reference"><a href="#cite_note-Graham-3">link</a></sup> In 1598, <a href="/wiki/Ulisse_Aldrovandi" title="Ulisse Aldrovandi">link</a>, a writer and <a href="/wiki/Naturalist" class="mw-redirect" title="Naturalist">link</a> at the <a href="/wiki/University_of_Bologna" title="University of Bologna">link</a>, <a href="/wiki/Italy" title="Italy">link</a>,
// published a comprehensive <a href="/wiki/Treatise" title="Treatise">link</a> on chickens which is still read
// and admired today. In it, he spoke on "wool-bearing chickens" and ones "clothed with hair like that of a black
// cat".<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">link</a></sup>

}

document.querySelector("p").textContent // como um innertext, mas mostra tudo, incluíndo o que tá oculto