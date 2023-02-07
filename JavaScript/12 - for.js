// for (let i = 1; i < 10; i++) {
//     console.log("Dona lurde")
// }

// for (let i = 0; i < 6; i++){
//     console.log("Da ba dee da ba daa")
// }

// for (let i = 0; i <= 100; i+= 2){
//     // numeros pares 0 a 100
//     console.log(i)
// }

for (let i = 100; i >= 0; i-= 10){
    console.log(i)
}

// looping over arrays

meuarray = ["Arthur",
            "Bruno",
            "Caio",
            "Davi",
            "Everaldo",
            "Fábio",
            "Geraldo",
            "Higor",
            "James",
            "Kaleb",
            "Lucas",
            "Mano",
            "Nolan"]
    
for (let i = 0; i < meuarray.length; i++){
    console.log(i, meuarray[i])
}

// nested loops

for (let i = 3; i > 0; i--){
    for (let j = -3; j < 0; j++){
        console.log(`i ${i} j ${j}`)
    }
}