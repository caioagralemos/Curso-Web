const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const reviewControllers = require('../controllers/reviews')

const validateReview = (req, res, next) => {
    let reviewSchemaVAL = Joi.object({
        review: Joi.object({
            body: Joi.string().required(),
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