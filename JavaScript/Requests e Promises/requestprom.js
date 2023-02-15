// requests de API feitos através de promessas (que são melhores que callback)
// requests de API podem funcionar ou falhar

document.querySelector(".pagehasresponse").style.color = "white"
let response = document.querySelector(".response")

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject("Connection timeout :/")
            }
            else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const rqst = fakeRequestPromise("youtube.com/oxecast")

// rqst.then((par) => {
//     console.log("promise resolved!")
//     response.style.color = "white"
//     response.innerText = par
//     fakeRequestPromise("youtube.com/flowpdc").then((par) => {
//         console.log("second promise resolved!")
//         response.style.color = "white"
//         response.innerText = par
//         fakeRequestPromise("youtube.com/podpah").then((par) => {
//             console.log("third promise resolved!")
//             response.style.color = "white"
//             response.innerText = "all of your promises were resolved"
//         }).catch((par) => {
//             console.log("promise rejected")
//             response.style.color = "white"
//             response.innerText = par
//         })
//     }).catch((par) => {
//         console.log("second promise rejected")
//         response.style.color = "white"
//         response.innerText = par
//     })
// }).catch((par) => {
//     console.log("promise rejected")
//     response.style.color = "white"
//     response.innerText = par
// })

// versão mais clean

fakeRequestPromise("youtube.com/page1").then((par) => {
    console.log("promise resolved! (page1)")
    response.style.color = "white"
    response.append(`${par}\n`)
    return fakeRequestPromise("youtube.com/page2")
}).then((par) => {
    console.log("promise resolved! (page2)")
    response.style.color = "white"
    response.append(`${par}\n`)
    return fakeRequestPromise("youtube.com/page3")
}).then(() => {
    console.log("promise resolved! (page3)")
    response.style.color = "white"
    response.innerText = "all of your promises have been resolved"
}).catch((par) => {
    // um só catch
    console.log("promise rejected")
    response.style.color = "white"
    response.append(`${par}\n`)
})