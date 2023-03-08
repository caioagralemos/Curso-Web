const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const flash = require('connect-flash')
const campoControllers = require('../controllers/campos')

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

router.get("/", catchAsync(campoControllers.index))

router.get("/new", campoControllers.novoCampoGet)

router.post("/", validateCampo, catchAsync(campoControllers.novoCampoPost))

router.get("/:id", catchAsync(campoControllers.campoGet))

router.get("/:id/edit", catchAsync(campoControllers.campoEditGet))

router.put("/:id", validateCampo, catchAsync(campoControllers.campoEditPost))

router.delete('/:id', catchAsync(campoControllers.campoDelete))

module.exports = router