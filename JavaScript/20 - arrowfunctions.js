// - ARROW FUNCTIONS - uma alternativa sintáticamente compacta às funções convencionais

const add = (x,y) => {
    // const nomeDaFunc = (parametros) => {
        // corpo da função
    //}

    return x + y;
}

const square = (x) => {
    return x*x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// - ARROW FUNCTIONS COM RETORNO IMPLÍCITO - sintaxe ainda mais simples 
// apenas quando nossa função só houver uma instrução

const multiply = (x,y) =>(
    // primeiro método - utilizando parenteses ao invés de chaves
    x*y
)

// segundo método - uma linha só (funções muito simples)
const isEven = (a) => a % 2 == 0
