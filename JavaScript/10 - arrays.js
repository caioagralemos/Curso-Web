// introdução ----

let meuarray = []
let meusegundoarray = []

meuarray[0] = "caio"
meuarray[1] = "lucas"
meuarray[2] = "marcos"
meuarray[3] = 2
meuarray[4] = "eduardo"
meuarray[5] = "mateus"
meuarray[6] = true
meuarray[7] = "daniel"

meusegundoarray[0] = 'waleska'
meusegundoarray[1] = 'bruna'
meusegundoarray[2] = 'julia'

meuarray.length // 8 
meuarray[8] // undefined
meuarray[3] = "luiz" // é possível mudar o valor

// métodos de array ----

meuarray.push('cirilo') // adiciona um elemento no fim do array
meuarray.pop() // remove e retorna o último elemento de um array
meuarray.shift() //  remove e retorna o primeiro elemento de um array
meuarray.unshift('início') // adiciona um elemento no início de um array
let juntos = meuarray.concat(meusegundoarray) // faz a união de 2 arrays 
meuarray.includes('caio') // retorna um bool dependendo se nosso array contém o objeto passado por parâmetro 
meuarray.indexOf('lucas') // retorna o index do argumento passado no array (-1 se não houver)
meuarray.reverse() // reverte o array
meuarray.slice(2) // retorna um array dos elementos depois do elemento com index 2
meuarray.slice(2,5) // retorna um array dos elementos entre 2 e 5 (não inclui 5)
meuarray.splice(1, 0, "giulio") // adiciona ou substitui um elemento (index, quantidade de elementos a serem substituidos, elemento)  

// igualdade entre arrays ----
// arrays são referenciadas como códigos de memória individuais independente dos elementos que tiverem dentro
// isso traz algumas propriedades curiosas

['a','b','c'] == ['a','b','c'] // false
['a','b','c'] === ['a','b','c'] // false

let meuarrayCopia = meuarray // qualquer alteração que eu fizer em qualquer um desses dois vai mudar os dois
const meuterceiroarray = [1,2,3,4]
meuterceiroarray.push(5) // é possível alterar arrays constantes desde que o valor de referência se mantenha o mesmo (por isso, é comum que arrays sejam const)
// meuterceiroarray = ["azul", "amarelo"] // erro! 

// arrays concatenados
let arraydeArrays = [[1,2,3], ['a', 'b', 'c'], 34, ["nome", "nome2", "nome3"]]
arraydeArrays[3][0] // "nome" 
