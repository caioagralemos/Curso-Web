const newImg = document.createElement('img')
newImg.src = "https://pbs.twimg.com/profile_images/1426997215097147399/IdnAl8Ll_400x400.jpg" 
let meuquery = document.querySelectorAll('h2') 
meuquery[1].appendChild(newImg) 

meuquery.insertAdjacentElement()
// (position, element)
//  beforebegin, afterbegin, beforeend, afterend
h1.insertAdjacentElement("afterend", meunovomundo) 