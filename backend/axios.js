// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("response: ", res)
// })
// .catch ((e) => {
//     console.log("error: ", e)
// })

const getSWPerson = async () => {
    // one line does it all!
    const res = await axios.get("https://swapi.dev/api/people/1/")
    console.log(res.data) // isso só imprime os dados
}

getSWPerson()

// Headers com Axios

const getDadJoke = async () => {
    try {
    // especificando HEADERS!!
    const resJoke = await axios.get("https://icanhazdadjoke.com", {headers: { Accept: "application/json" }})
    console.log(resJoke.data.joke)
    } catch (e) { 
        console.log("error: ", e)
    }
}


response = document.querySelector(".pagehasresponse")
response.style.color = "white"
botaopiadas = document.createElement("button")
response.append(botaopiadas)
botaopiadas.style.width = "150px"
botaopiadas.style.height = "60px"
botaopiadas.innerText = "clique em mim e veja uma piada"
botaopiadas.addEventListener("click", () => {
    getDadJoke()
})
