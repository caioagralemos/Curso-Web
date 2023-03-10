const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const flash = require('connect-flash')
const campoControllers = require('../controllers/campos')
const multer = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({ storage })

const validateCampo = (req, res, next) => {
    let campoSchemaVAL = Joi.object({
        campo: Joi.object({
            titulo: Joi.string().required(),
            preco: Joi.number().required().min(0),
            descricao: Joi.string().required(),
            endereco: Joi.string().required(),
            telefone: Joi.string().allow(''),
            instagram: Joi.string().allow(''),
            cidade: Joi.string().required()
        }).required(),
        deletarimagens: Joi.array()
    })
    const options = { stripUnknown: true };
    const { error, value } = campoSchemaVAL.validate(req.body, options);
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

router.post("/", upload.array('imagem'), validateCampo, catchAsync(campoControllers.novoCampoPost))


router.get("/:id", catchAsync(campoControllers.campoGet))

router.get("/:id/edit", catchAsync(campoControllers.campoEditGet))

router.put("/:id", upload.array('imagem'), validateCampo, catchAsync(campoControllers.campoEditPost))

router.delete('/:id', catchAsync(campoControllers.campoDelete))

module.exports = router