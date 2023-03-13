const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const BaseJoi = require('joi')
const ExpressError = require('../utils/ExpressError')
const flash = require('connect-flash')
const campoControllers = require('../controllers/campos')
const multer = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({ storage })

const sanitizeHtml = require('sanitize-html')

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label} must not include HTML!}'
    }, rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                })
                if(clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean
            }
        }
    }
})

const Joi = BaseJoi.extend(extension)

const validateCampo = (req, res, next) => {
    let campoSchemaVAL = Joi.object({
        campo: Joi.object({
            titulo: Joi.string().required().escapeHTML(),
            preco: Joi.number().required().min(0),
            descricao: Joi.string().required().escapeHTML(),
            endereco: Joi.string().required().escapeHTML(),
            telefone: Joi.string().allow('').escapeHTML(),
            instagram: Joi.string().allow('').escapeHTML(),
            cidade: Joi.string().required().escapeHTML()
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