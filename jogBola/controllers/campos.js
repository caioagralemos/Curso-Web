const Campo = require('../models/campo')
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const mapboxToken = process.env.MAPBOX_TOKEN
const geocoder = mbxGeocoding({ accessToken: mapboxToken })
const {cloudinary} = require('../cloudinary')
const { string } = require('joi')
const natural = require('natural')
const tokenizer = new natural.WordTokenizer()
const stopWords = natural.stopwords
const diacritic = require('diacritic')

function normalizeText(text) {
    // Remova acentos
    const textWithoutDiacritics = diacritic.clean(text);
  
    // Tokenize o texto em palavras
    const words = tokenizer.tokenize(textWithoutDiacritics);
    
    // Converta todas as palavras para minúsculas
    const normalizedWords = words.map(word => word.toLowerCase());
    
    // Remova as stop words
    const filteredWords = normalizedWords.filter(word => !stopWords.includes(word));
    
    // Junte as palavras novamente em uma única string
    return filteredWords.join(' ');
  }
  

  module.exports.index = async (req, res) => {
    let {cidadequery, oficialquery} = req.query
    const normalizedQuery = normalizeText(cidadequery)
    if(normalizedQuery) {
        if(oficialquery) {
            const campos = await Campo.find({cidade: new RegExp(normalizedQuery, "i"), verificado: true})
            res.render('campos/index', {campos})
        } else {
            const campos = await Campo.find({cidade: new RegExp(cidadequery, "i")})
            res.render('campos/index', {campos})
        }
    }
    else {
        if(oficialquery) {
            const campos = await Campo.find({verificado: true})
            res.render('campos/index', {campos})
        } else {
            const campos = await Campo.find({})
            res.render('campos/index', {campos})
        }
    }
}

module.exports.novoCampoGet = (req, res) => {
    if(!req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Você precisa entrar para fazer isso!')
        return res.redirect('/login')
        } 
        // tem que vir antes do que mexe com id se não new vai ser tratado como id
    res.render("campos/new.ejs")
}

module.exports.novoCampoPost = async (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Você precisa entrar para fazer isso!')
        return res.redirect(`/campos`)
        } 
    let novoCampo = new Campo(req.body.campo)
    novoCampo.imagem = req.files.map(f => ({url: f.path, filename: f.filename}))
    if(req.user._id == '6408b9fe36efd8b0519f085d') {
        novoCampo.verificado = true
    } else {
        novoCampo.verificado = false
    }
    novoCampo.autor = req.user._id
    const geoData = await geocoder.forwardGeocode({
        query: `${novoCampo.endereco}, ${novoCampo.cidade}`,
        limit: 1
    }).send()
    novoCampo.geometry = geoData.body.features[0].geometry
    await novoCampo.save()
    req.flash('success', `Campo adicionado com sucesso, ${req.user.name}`)
    res.redirect(`/campos/${novoCampo._id}`)
}

module.exports.campoGet = async (req, res, next) => {
    const { id } = req.params
    const essecampo = await Campo.findById(id).populate({
        path: 'reviews',
        populate: {
            path: 'autor'
        }
    }).populate('autor')
    console.log(essecampo)
    res.render("campos/show.ejs", { essecampo })
}

module.exports.campoEditGet = async (req, res, next) => {
    const essecampo = await Campo.findById(req.params.id)
    if(!req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Você precisa entrar para fazer isso!')
        return res.redirect(`/campos/${essecampo._id}`)
        } 
    console.log(req.user._id)
    if(!essecampo.autor.equals(req.user._id))  {
            req.flash('error', 'Calma lá, jogador(a)! Você não tem permissão pra fazer isso! Cartão amarelo pra você!')
            return res.redirect(`/campos/${essecampo._id}`)
    }
    res.render("campos/edit.ejs", { essecampo })
}

module.exports.campoEditPost = async (req, res, next) => {
    if (!req.body.campo) throw new ExpressError('Algo deu Errado', 400)
    const { id } = req.params
    const camp = await Campo.findById(id)
    if(!req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Você precisa entrar para fazer isso!')
        return res.redirect(`/campos/${camp._id}`)
        } 
    if(!camp.autor.equals(req.user._id)) {
            req.flash('error', 'Calma lá, jogador(a)! Você não tem permissão pra fazer isso! Cartão amarelo pra você!')
            return res.redirect(`/campos/${camp._id}`)
    }
    const campo = await Campo.findByIdAndUpdate(id, { ...req.body.campo })
    const imgs = req.files.map(f => ({url: f.path, filename: f.filename}))
    campo.imagem.push(...imgs) // desfazendo um array e passando argumentos individuais
    const geoData = await geocoder.forwardGeocode({
        query: `${campo.endereco}, ${campo.cidade}`,
        limit: 1
    }).send()
    campo.geometry = geoData.body.features[0].geometry
    await campo.save()
    if(req.body.deletarimagens) {
        for(let filename of req.body.deletarimagens){
            await cloudinary.uploader.destroy(filename)
        }
        await campo.updateOne({$pull: {imagem: {filename: {$in: req.body.deletarimagens}}}})
    }
    req.flash('success', `Campo editado com sucesso, ${req.user.name}!`)
    res.redirect(`/campos/${id}`)
}

module.exports.campoDelete = async (req, res, next) => {
    const { id } = req.params
    camp = await Campo.findById(id)
    if(!req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Você precisa entrar para fazer isso!')
        return res.redirect(`/campos/${id}`)
        } 
    if(!camp.autor.equals(req.user._id)) {
            req.flash('error', 'Calma lá, jogador(a)! Você não tem permissão pra fazer isso! Cartão amarelo pra você!')
            return res.redirect(`/campos/${id}`)
    }
    for(let file of camp.imagem){
        await cloudinary.uploader.destroy(file.filename)
    }
    await Campo.findByIdAndDelete(id)
    req.flash('success', `Campo deletado com sucesso, ${req.user.name}!`)
    res.redirect('/campos/')
}