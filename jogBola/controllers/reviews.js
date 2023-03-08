const Review = require('../models/review')

module.exports.criarReview = async(req,res) => {
    const campo = await Campo.findById(req.params.id)
    if(!req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Você precisa entrar para fazer isso!')
        return res.redirect(`/campos/${campo._id}`)
        } 
    const review = new Review(req.body.review)
    review.autor = req.user._id
    campo.reviews.push(review)
    await review.save()
    await campo.save()
    req.flash('success', `Sua review foi criada, ${req.user.name}!`)
    res.redirect(`/campos/${campo._id}`)
}

module.exports.deletarReview = async (req,res) => {
    const { id } = req.params
    if(!review.autor.equals(req.user._id)) {
            req.flash('error', 'Calma lá, jogador(a)! Você não tem permissão pra fazer isso! Cartão amarelo pra você!')
            return res.redirect(`/campos/${id}`)
    }
    Campo.findByIdAndUpdate(req.params.id, {$pull: {reviews: req.params.reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId)
    req.flash('success', 'Review deletada!')
    res.redirect(`/campos/${req.params.id}`)
}