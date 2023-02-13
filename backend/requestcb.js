// requests de api feitos através de callbacks
document.querySelector(".pagehasresponse").style.color = "white"
let response = document.querySelector(".response")

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 3000) {
            failure("Connection timeout :/")
        }
        else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// fakeRequestCallback("books.com", (par) => {
//     console.log(`It worked!`)
//     response.style.color = "white"
//     response.innerText = par
// }, (par) => {
//     console.log(`Oops, something went wrong.\n${par}`)
//     response.style.color = "white"
//     response.innerText = par
// })

// solicitação 2 - o que fazer se a solicitação der certo

fakeRequestCallback("books.com/page1", (par) => {
    console.log(`It worked!`)
    response.style.color = "white"
    response.innerText = par
    fakeRequestCallback("books.com/page2", (par) => {
        // só roda se o primeiro der certo!
        console.log("worked again")
        fakeRequestCallback("books.com/page3", (par) => {
            console.log("You are lucky! Your third fetch worked")
        }, (par) => {
            console.log("third one error :/")
        })
    }, (par) => {
        console.log("we couldnt fetch your second page")
    })
}, (par) => {
    console.log(`Oops, something went wrong.\n${par}`)
    response.style.color = "white"
    response.innerText = par
})

// CALLBACK HELL é como chamam essa bagunça de vários requests.