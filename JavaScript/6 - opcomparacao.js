// --- operadores de comparação ---

// maior que
1 > 3 // false

// menor que
1 < 3 // true

// maior ou igual
1 >= 3 // false

// menor ou igual
1 <= 3 // true

// igualdade
1 == '1' // true
null == undefined // true
0  == "" // true

// diferença
1 != 3 // true

// strict equality
1 === '1' // false
null === undefined // false
0  === "" // false


// strict unequality
1 !== '1' // true

// é possivel fazer comparações entre letras. o parâmetro utilizado
// é o código unicode de cada uma. A(0041) e a(0061)
'a' > 'A' // true

// --- console, alert e prompt ---

console.log("100") // funciona como um print
console.warn("ei!") // retorna um alerta no console
console.error("errou.") // retorna um erro no console

alert("Olá!") // joga um popup chato na cara do usuário

let userInput = prompt("Diga seu número de 1 a 10") // um pop up que pede um input pra o usuário (string)

userInput = parseInt(userInput) // como um int(x) em python 