const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const BaseJoi = require('joi')
const ExpressError = require('../utils/ExpressError')
const reviewControllers = require('../controllers/reviews')

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

const validateReview = (req, res, next) => {
    let reviewSchemaVAL = Joi.object({
        review: Joi.object({
            body: Joi.string().required().escapeHTML(),
            rating: Joi.number().required()
        }).required()
    })
    const {error} = reviewSchemaVAL.validate(req.body)
    if (error) {
        console.log(error)
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

router.post('/', validateReview, catchAsync(reviewControllers.criarReview))

router.delete('/:reviewId', catchAsync(reviewControllers.deletarReview))

module.exports = router