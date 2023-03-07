const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const flash = require('connect-flash')

const validateCampo = (req, res, next) => {
    let campoSchemaVAL = Joi.object({
        campo: Joi.object({
            titulo: Joi.string().required(),
            imagem: Joi.string().required(),
            preco: Joi.number().required().min(0),
            descricao: Joi.string().required(),
            local: Joi.string().required()
        }).required()
    })
    const { error } = campoSchemaVAL.validate(req.body)
    if(error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)
        throw new ExpressError("Algo deu errado com sua submissão", 400)
    } else {
        next()
    }
}

router.get("/", catchAsync(async (req, res, next) => {
    const campos = await Campo.find({})
    res.render("campos/index.ejs", { campos, messages: res.locals.success })
}))

router.get("/new", (req, res) => {
    // tem que vir antes do que mexe com id se não new vai ser tratado como id
    res.render("campos/new.ejs")
})

router.post("/", validateCampo, catchAsync(async (req, res, next) => {
    let novoCampo = new Campo(req.body.campo)
    await novoCampo.save()
    req.flash('success', 'Campo adicionado com sucesso!')
    res.redirect(`/campos/${novoCampo._id}`)
}))

router.get("/:id", catchAsync(async (req, res, next) => {
    const { id } = req.params
    const essecampo = await Campo.findById(id).populate('reviews')
    res.render("campos/show.ejs", { essecampo })
}))

router.get("/:id/edit", catchAsync(async (req, res, next) => {
    const essecampo = await Campo.findById(req.params.id)
    res.render("campos/edit.ejs", { essecampo })
}))

router.put("/:id", validateCampo, catchAsync(async (req, res, next) => {
    if (!req.body.campo) throw new ExpressError('Algo deu Errado', 400)
    const { id } = req.params
    const campo = await Campo.findByIdAndUpdate(id, { ...req.body.campo })
    req.flash('success', 'Campo editado com sucesso!')
    res.redirect(`/campos/${id}`)
}))

router.delete('/:id', catchAsync(async (req, res, next) => {
    const { id } = req.params
    await Campo.findByIdAndDelete(id)
    req.flash('success', 'Campo deletado com sucesso!')
    res.redirect('/campos/')
}))

module.exports = router