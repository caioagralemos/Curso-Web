const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const passport = require('passport')


router.get('/register', (req, res) => {
    if(req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Tu já tá logado(a)!')
        return res.redirect('/')
        } 
    res.render('users/register.ejs')
})

router.post('/register', async (req, res) => {
    try{
    const {email, name, username, password} = req.body
    const user = new User({username, email, name})
    const registeredUser = await User.register(user, password)
    req.logIn(registeredUser, err => {
        if(err) return next(err)
        console.log(registeredUser)
        req.flash('success', `Bem-vindo(a) ao jogBola, ${name}!`)
        res.redirect('/campos')
    })
    } catch (e) {
        req.flash('error', 'Email ou Usuário já registrados! Tente novamente ou faça login, jogador(a)!')
        res.redirect('/register')
    }
})

router.get('/login', (req, res) => {
    if(req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Tu já tá logado!')
        return res.redirect('/')
        } 
    res.render('users/login.ejs')
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'Alguma coisa tá errada, jogador(a)! Olha aí direitinho e tenta de novo :)'}), (req, res) => {
    req.flash('success', `Bem-vindo(a) de volta ao jogBola, jogador(a)!`)
    res.redirect('/')
})

router.get('/logout', (req,res) => {
    req.logout(function(err) {
        if (err) {
          // Handle error
          req.flash('error', 'Você não tá logado(a), jogador(a).')
          res.redirect('/')
        }
        // Handle successful logout
        req.flash('success', 'Até a próxima, Jogador(a)! Tamo junto! xD')
        res.redirect('/')
      });
})

module.exports = router