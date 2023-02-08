// for in serve para iterar objetos

const pontos = {
    Arthur: 7,
    Bruno: 9,
    Caio: 28,
    Davi: 27,
    Everaldo: 30,
    Fabio: 12,
    Geraldo: 3,
    Higor: 8,
    James: 11,
    Kaleb: 0,
    Lucas: 19,
    Mano: 16,
    Nolan: 2
}

// for (let person in pontos){
//     console.log(`${person} marcou ${pontos[person]}`)
// }

// outros metodos relacionados
Object.keys(pontos)
Object.values(pontos)

let total = 0
for (let point of Object.values(pontos)) {
    // aqui usamos of pois isso é tratado como um array
    total += point
}
console.log(total / 13)

for (let person in pontos) {
    if (pontos[person] > (total / 13)) {
        console.log(`${person} está acima da média!`)
    }
}