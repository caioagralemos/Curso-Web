let homebutton = document.querySelector("#homebutton")
let homepoints = document.querySelector("#home")
let home = 0
let awaybutton = document.querySelector("#awaybutton")
let awaypoints = document.querySelector("#away")
let away = 0
let points = document.querySelector("#points")
let reset = document.querySelector("#reset")

homebutton.addEventListener("click", () => {
    home+= 1
    if (away >= points.value) {
        null
    }
    else if (home == points.value) {
        homepoints.innerText = home
        homepoints.style.color = "green"
        awaypoints.style.color = "red"
        if (home > away) {
            alert("Player 1 wins!")
        }
    }
    else if (home > points.value) {
        null
    }
    else{
        homepoints.innerText = home
    }
})

awaybutton.addEventListener("click", () => {
    away+= 1
    if (home >= points.value) {
        null
    }
    else if (away == points.value) {
        awaypoints.innerText = away
        awaypoints.style.color = "green"
        homepoints.style.color = "red"
        if (away > home) {
            alert("Player 2 wins!")
        }
    }
    else if (away > points.value) {
        null
    }
    else{
        awaypoints.innerText = away
    }
})


reset.addEventListener("click", () => {
    home = 0
    away = 0
    homepoints.innerText = home
    awaypoints.innerText = away
    homepoints.style.color = "black"
    awaypoints.style.color = "black"
})
