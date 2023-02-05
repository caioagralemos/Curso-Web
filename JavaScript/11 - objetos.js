const Pessoa = {
    name: "Caio",
    surname: "Lemos",
    age: 18,
    nationality: ["Brazil", "Northeast", "Alagoas", "Maceió"],
    alive: true,
    grades : {
        // objeto dentro de objeto
        ga: 9,
        ed: 10,
        bd: 7,
        oac: 8
    }
}

// como pegar uma propriedade de um objeto
Pessoa["name"] // opção 1 (utilizar se estiver trabalhando com variáveis)
Pessoa.name // opção 2

// mudando o valor de um atributo de um objeto
Pessoa.age = 19
Pessoa.grades.ed = 9

// atribuindo nova coisa
Pessoa.cpf = "141-714-584.63"