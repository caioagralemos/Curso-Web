// sintaxe: fetch(url)

// fetch("https://swapi.dev/api/people/1/").then(res => {
//     console.log("Resolved!", res)
//     return res.json()
// })
// .then((data) => {
//     console.log("json done", data)
//     return fetch("https://swapi.dev/api/people/2/")
// })
// .then((res) => {
//     console.log("second request resolved", res)
//     return res.json()
// })
// .then((data) => {
//     console.log("second json done", data)
// })
// .catch((e) => {
//     console.log("Error", e)
// })

// utilizando async

const loadSWPeople = async () => {
    try {
    const res1 = await fetch("https://swapi.dev/api/people/1/")
    const jason1 = await res1.json()
    console.log(jason1)
    const res2 = await fetch("https://swapi.dev/api/people/2/")
    const jason2 = await res2.json()
    console.log(jason2)
    } catch (e) {
        console.log("error", e)
    }
}

loadSWPeople()