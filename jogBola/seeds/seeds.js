const mongoose = require('mongoose')
const Campo = require('../models/campo')

const campo1 = new Campo ({
    titulo: "Gol Futebol Society",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 120,
    descricao: "campo pequeno society bom para futebol com grupo pequeno de amigos",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo2 = new Campo ({
    titulo: "Sociedade Esportiva",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 180,
    descricao: "Campo society grande com excelente infraestrutura",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo3 = new Campo ({
    titulo: "Arena dos Amigos",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 90,
    descricao: "Campo society para futebol amador",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo4 = new Campo ({
    titulo: "Campinho da Praia",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 100,
    descricao: "Campo society próximo à praia para jogos com os amigos",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo5 = new Campo ({
    titulo: "Arena do Samba",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 150,
    descricao: "Campo society com excelente cidadeização",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo6 = new Campo ({
    titulo: "Arena da Pelada",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 80,
    descricao: "Campo society para jogos informais",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo7 = new Campo ({
    titulo: "Sociedade do Futebol",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 200,
    descricao: "Campo society com grama sintética",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo8 = new Campo ({
    titulo: "Arena da Zona Sul",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 120,
    descricao: "Campo society cidadeizado na zona sul de Maceió",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo9 = new Campo ({
    titulo: "Arena do Bairro",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 80,
    descricao: "Campo society para jogos em bairros de Maceió",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo10 = new Campo ({
    titulo: "Estádio da Praia",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 3000,
    descricao: "Estádio de futebol profissional com capacidade para 10.000 pessoas",
    endereco: 'Av. Abdon Arroxelas 58',
    cidade: "Maceió",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo11 = new Campo ({
    titulo: "Arena do Recife",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 120,
    descricao: "Campo society cidadeizado no centro de Recife",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo12 = new Campo ({
    titulo: "Sociedade dos Amigos",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 180,
    descricao: "Campo society com excelente iluminação para jogos noturnos",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo13 = new Campo ({
    titulo: "Arena dos Boêmios",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 90,
    descricao: "Campo society próximo aos bares da orla de recife",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo14 = new Campo ({
    titulo: "Arena da Praia de Boa Viagem",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 150,
    descricao: "Campo society próximo à praia",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo15 = new Campo ({
    titulo: "Arena do Pátio",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 80,
    descricao: "Campo society cidadeizado em shopping center",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo16 = new Campo ({
    titulo: "Sociedade do Futebol",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 200,
    descricao: "Campo society com grama sintética",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo17 = new Campo ({
    titulo: "Arena da Zona Norte",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 120,
    descricao: "Campo society cidadeizado na zona norte de Recife",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo18 = new Campo ({
    titulo: "Arena do Bairro",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 80,
    descricao: "Campo society para jogos em bairros de Recife",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo19 = new Campo({
    titulo: "Estádio do Sport Club",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 300,
    descricao: "Estádio de futebol profissional do Sport Club Recife",
    cidade: "Recife",
    autor: "6408b9fe36efd8b0519f085d"
})

const campo20 = new Campo ({
    titulo: "Arena do Dragão",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 100,
    descricao: "Campo society com iluminação para jogos noturnos",
    cidade: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})
const campo21 = new Campo ({
    titulo: "Sociedade da Praia",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 150,
    descricao: "Campo society próximo à orla de Aracaju",
    cidade: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})
const campo22 = new Campo ({
    titulo: "Arena do Bairro Industrial",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 80,
    descricao: "Campo society para jogos informais",
    cidade: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})
const campo23 = new Campo ({
    titulo: "Estádio Lourival Baptista",
    imagem:[
        {
        url: 'https://source.unsplash.com/collection/9600273',
        filename: 'notrelevant'
    }],
    preco: 4000,
    descricao: "Estádio de futebol profissional do Club Sportivo Sergipe",
    cidade: "Aracaju",
    autor: "6408b9fe36efd8b0519f085d"
})

module.exports = [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, campo10, campo11, campo12, campo13, campo14, campo15, campo16, campo17, campo18, campo19, campo20, campo21, campo22, campo23]