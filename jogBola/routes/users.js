const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const passport = require('passport')


router.get('/register', (req, res) => {
    res.render('users/register.ejs')
})

router.post('/register', async (req, res) => {
    try{
    const {email, name, username, password} = req.body
    const user = new User({username, email, name})
    const registeredUser = await User.register(user, password)
    console.log(registeredUser)
    req.flash('success', `Bem-vindo(a) ao jogaBola, ${name}!`)
    res.redirect('/')
    } catch (e) {
        req.flash('error', 'Email ou Usuário já registrados! Tente novamente ou faça login, jogador(a)!')
        res.redirect('/register')
    }
})

router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'Alguma coisa tá errada, jogador(a)! Olha aí direitinho e tenta de novo :)'}), (req, res) => {
    req.flash('success', `Bem-vindo(a) de volta ao jogaBola, jogador(a)!`)
    res.redirect('/')
})

module.exports = router