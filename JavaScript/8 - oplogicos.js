// Truthy ou Falsey ----

// todos os valores em JS possuem um lado na guerra entre os bools
// verdadeiro e falso. a maioria dos valores vêm com esse true
// inerente, mas existem alguns valores que, quando em uma comparação
// lógica, vão sempre retornar falso. esses valores são os falseys:

false
null
0
""
undefined
NaN

const nome = ""

if(nome){
    console.log("True")
}
else{
    console.log("False")
}

// vai retornar false

if(1243023){
    console.log("True")
}
else{
    console.log("False")
}

// vai retornar true

// Operadores lógicos ----

1 && 2 // AND, para retornar true os dois tem que ser true
1 > 2 || 2 < 7 // OR, se um lado for verdade, tudo vai ser true
!null // NOT, retorna o inverso do booleano do valor passado 