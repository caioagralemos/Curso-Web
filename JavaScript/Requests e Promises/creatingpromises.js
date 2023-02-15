const fakeRequest = (url) => {
    const rand = Math.random
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (rand > 0.7) {
                resolve("your fake data here!")
            }
            reject("rejected")
        }, 1000)
    })
}

fakeRequest("google.com").then((par) => {
    console.log(par)
    console.log("ok")
}).catch((par) => {
    console.log(par)
})