const mongoose = require('mongoose')
const Campo = require('../models/campo')

const campo1 = new Campo ({
    titulo: "Gol Futebol Society",
    preco: "R$ 120 / Hora",
    descricao: "campo pequeno society bom para futebol com grupo pequeno de amigos",
    local: "Maceió"
})

const campo2 = new Campo ({
    titulo: "Sociedade Esportiva",
    preco: "R$ 180 / Hora",
    descricao: "Campo society grande com excelente infraestrutura",
    local: "Maceió"
})

const campo3 = new Campo ({
    titulo: "Arena dos Amigos",
    preco: "R$ 90 / Hora",
    descricao: "Campo society para futebol amador",
    local: "Maceió"
})

const campo4 = new Campo ({
    titulo: "Campinho da Praia",
    preco: "R$ 100 / Hora",
    descricao: "Campo society próximo à praia para jogos com os amigos",
    local: "Maceió"
})

const campo5 = new Campo ({
    titulo: "Arena do Samba",
    preco: "R$ 150 / Hora",
    descricao: "Campo society com excelente localização",
    local: "Maceió"
})

const campo6 = new Campo ({
    titulo: "Arena da Pelada",
    preco: "R$ 80 / Hora",
    descricao: "Campo society para jogos informais",
    local: "Maceió"
})

const campo7 = new Campo ({
    titulo: "Sociedade do Futebol",
    preco: "R$ 200 / Hora",
    descricao: "Campo society com grama sintética",
    local: "Maceió"
})

const campo8 = new Campo ({
    titulo: "Arena da Zona Sul",
    preco: "R$ 120 / Hora",
    descricao: "Campo society localizado na zona sul de Maceió",
    local: "Maceió"
})

const campo9 = new Campo ({
    titulo: "Arena do Bairro",
    preco: "R$ 80 / Hora",
    descricao: "Campo society para jogos em bairros de Maceió",
    local: "Maceió"
})

const campo10 = new Campo ({
    titulo: "Estádio da Praia",
    preco: "R$ 3000 / Hora",
    descricao: "Estádio de futebol profissional com capacidade para 10.000 pessoas",
    local: "Maceió"
})

const campo11 = new Campo ({
    titulo: "Arena do Recife",
    preco: "R$ 120 / Hora",
    descricao: "Campo society localizado no centro de Recife",
    local: "Recife"
})

const campo12 = new Campo ({
    titulo: "Sociedade dos Amigos",
    preco: "R$ 180 / Hora",
    descricao: "Campo society com excelente iluminação para jogos noturnos",
    local: "Recife"
})

const campo13 = new Campo ({
    titulo: "Arena dos Boêmios",
    preco: "R$ 90 / Hora",
    descricao: "Campo society próximo aos bares da orla de recife",
    local: "Recife"
})

const campo14 = new Campo ({
    titulo: "Arena da Praia de Boa Viagem",
    preco: "R$ 150 / Hora",
    descricao: "Campo society próximo à praia",
    local: "Recife"
})

const campo15 = new Campo ({
    titulo: "Arena do Pátio",
    preco: "R$ 80 / Hora",
    descricao: "Campo society localizado em shopping center",
    local: "Recife"
})

const campo16 = new Campo ({
    titulo: "Sociedade do Futebol",
    preco: "R$ 200 / Hora",
    descricao: "Campo society com grama sintética",
    local: "Recife"
})

const campo17 = new Campo ({
    titulo: "Arena da Zona Norte",
    preco: "R$ 120 / Hora",
    descricao: "Campo society localizado na zona norte de Recife",
    local: "Recife"
})

const campo18 = new Campo ({
    titulo: "Arena do Bairro",
    preco: "R$ 80 / Hora",
    descricao: "Campo society para jogos em bairros de Recife",
    local: "Recife"
})

const campo19 = new Campo({
    titulo: "Estádio do Sport Club",
    preco: "R$ 300 / Hora",
    descricao: "Estádio de futebol profissional do Sport Club Recife",
    local: "Recife"
})

const campo20 = new Campo ({
    titulo: "Arena do Dragão",
    preco: "R$ 100 / Hora",
    descricao: "Campo society com iluminação para jogos noturnos",
    local: "Aracaju"
})
const campo21 = new Campo ({
    titulo: "Sociedade da Praia",
    preco: "R$ 150 / Hora",
    descricao: "Campo society próximo à orla de Aracaju",
    local: "Aracaju"
})
const campo22 = new Campo ({
    titulo: "Arena do Bairro Industrial",
    preco: "R$ 80 / Hora",
    descricao: "Campo society para jogos informais",
    local: "Aracaju"
})
const campo23 = new Campo ({
    titulo: "Estádio Lourival Baptista",
    preco: "R$ 4000 / Hora",
    descricao: "Estádio de futebol profissional do Club Sportivo Sergipe",
    local: "Aracaju"
})

module.exports = [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, campo10, campo11, campo12, campo13, campo14, campo15, campo16, campo17, campo18, campo19, campo20, campo21, campo22, campo23]