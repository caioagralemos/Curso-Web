// sintaxe --

// function funcName(){
//     // do something
// }

// minha primeira função --

function singSong(){
    console.log("DO")
    console.log("RE")
    console.log("MI")
    console.log("FA")
    console.log("SOL")
    console.log("LA")
    console.log("SI")
    console.log("DO")
}

// minha primeira função com argumentos --

function greet(nome){
    console.log(`Olá, ${nome}`)
}

// função com múltiplos argumentos --

function greetSurname(nome, sobrenome){
    console.log(`Olá, ${nome} ${sobrenome}!`)
}

// função com retorno

function avg (a,b,c,d){
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number'){
        return (a + b + c + d) / 4
    }
    else{
        return false
    }
}