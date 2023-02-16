const soma = (x,y) => {
    return x+y
}

const mult = (x,y) => {
    return x*y
}

const PI = 3.1415

// só os elementos declarados serão exportados
exports.soma = soma
exports.mult = mult
exports.PI = PI