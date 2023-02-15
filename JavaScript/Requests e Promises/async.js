// uma sintaxe diferente e mais moderna para Promises
//  Palavras-chave: Async e Await

// async serve pra declarar uma 
// função asincrona (função que sempre retorna uma promessa)
// se a func retornar algo, a promessa vai ser dada como resolved com o retorno
// se der catch em uma exception, vai ser dada como rejected

async function hello() {
    throw "problem." // sempre vai rejeitar uma promise
    return "hello"
}

async function sing() {
    // Promise { <state>: "fulfilled", <value>: "so that ill never feel alone, again" }
    return "so that ill never feel alone, again"
}

sing().then((data) => {
    console.log(`promise resolved with "${data}"`)
})

// hello().then(() => {
//     console.log("hello function error")
// }).catch(err => {
//     console.log(err)
// })

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password == "8501") return "Welcome!"
    throw "Invalid Password"
}

login("asdasd", "8501").then(msg => {
    console.log("logged in")
    console.log(msg)
}).catch(err => {
    console.log("something went wrong")
    console.log(err)
})

// trabalhando com erros em função async

const fakeRequest = (url) => {
    const rand = Math.random
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (rand > 0.7) {
                resolve(`your fake data here! ${url}`)
            }
            reject("rejected")
        }, 1000)
    })
}

const twoRequests = async(url1, url2) => {
    try {
        fakeRequest(url1)
        fakeRequest(url2)
        console.log("fetched")
    } catch (e) {
        console.log("something went wrong")
        console.log(`error ${e}`)
    }
}