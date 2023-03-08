const mongoose = require('mongoose')
const Campo = require('../models/campo')

const campo1 = new Campo ({
    titulo: "Gol Futebol Society",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 120,
    descricao: "campo pequeno society bom para futebol com grupo pequeno de amigos",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo2 = new Campo ({
    titulo: "Sociedade Esportiva",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 180,
    descricao: "Campo society grande com excelente infraestrutura",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo3 = new Campo ({
    titulo: "Arena dos Amigos",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 90,
    descricao: "Campo society para futebol amador",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo4 = new Campo ({
    titulo: "Campinho da Praia",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 100,
    descricao: "Campo society próximo à praia para jogos com os amigos",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo5 = new Campo ({
    titulo: "Arena do Samba",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 150,
    descricao: "Campo society com excelente localização",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo6 = new Campo ({
    titulo: "Arena da Pelada",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 80,
    descricao: "Campo society para jogos informais",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo7 = new Campo ({
    titulo: "Sociedade do Futebol",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 200,
    descricao: "Campo society com grama sintética",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo8 = new Campo ({
    titulo: "Arena da Zona Sul",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 120,
    descricao: "Campo society localizado na zona sul de Maceió",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo9 = new Campo ({
    titulo: "Arena do Bairro",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 80,
    descricao: "Campo society para jogos em bairros de Maceió",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo10 = new Campo ({
    titulo: "Estádio da Praia",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 3000,
    descricao: "Estádio de futebol profissional com capacidade para 10.000 pessoas",
    local: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo11 = new Campo ({
    titulo: "Arena do Recife",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 120,
    descricao: "Campo society localizado no centro de Recife",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo12 = new Campo ({
    titulo: "Sociedade dos Amigos",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 180,
    descricao: "Campo society com excelente iluminação para jogos noturnos",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo13 = new Campo ({
    titulo: "Arena dos Boêmios",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 90,
    descricao: "Campo society próximo aos bares da orla de recife",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo14 = new Campo ({
    titulo: "Arena da Praia de Boa Viagem",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 150,
    descricao: "Campo society próximo à praia",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo15 = new Campo ({
    titulo: "Arena do Pátio",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 80,
    descricao: "Campo society localizado em shopping center",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo16 = new Campo ({
    titulo: "Sociedade do Futebol",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 200,
    descricao: "Campo society com grama sintética",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo17 = new Campo ({
    titulo: "Arena da Zona Norte",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 120,
    descricao: "Campo society localizado na zona norte de Recife",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo18 = new Campo ({
    titulo: "Arena do Bairro",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 80,
    descricao: "Campo society para jogos em bairros de Recife",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo19 = new Campo({
    titulo: "Estádio do Sport Club",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 300,
    descricao: "Estádio de futebol profissional do Sport Club Recife",
    local: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo20 = new Campo ({
    titulo: "Arena do Dragão",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 100,
    descricao: "Campo society com iluminação para jogos noturnos",
    local: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})
const campo21 = new Campo ({
    titulo: "Sociedade da Praia",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 150,
    descricao: "Campo society próximo à orla de Aracaju",
    local: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})
const campo22 = new Campo ({
    titulo: "Arena do Bairro Industrial",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 80,
    descricao: "Campo society para jogos informais",
    local: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})
const campo23 = new Campo ({
    titulo: "Estádio Lourival Baptista",
    imagem: 'https://source.unsplash.com/collection/9600273',
    preco: 4000,
    descricao: "Estádio de futebol profissional do Club Sportivo Sergipe",
    local: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})

module.exports = [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, campo10, campo11, campo12, campo13, campo14, campo15, campo16, campo17, campo18, campo19, campo20, campo21, campo22, campo23]