const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campo = require('../models/campo')
const Review = require('../models/review')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')

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

router.post('/', validateReview, catchAsync(async(req,res) => {
    const campo = await Campo.findById(req.params.id)
    const review = new Review(req.body.review)
    campo.reviews.push(review)
    await review.save()
    await campo.save()
    req.flash('success', 'Nova review criada!')
    res.redirect(`/campos/${campo._id}`)
}))

router.delete('/:reviewId', catchAsync(async (req,res) => {
    Campo.findByIdAndUpdate(req.params.id, {$pull: {reviews: req.params.reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId)
    req.flash('success', 'Review deletada!')
    res.redirect(`/campos/${req.params.id}`)
}))

module.exports = router