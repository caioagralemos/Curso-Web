const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const Joi = require('joi')
const ExpressError = require('../utils/ExpressError')
const passport = require('passport')
const userControllers = require('../controllers/users')

router.get('/register', userControllers.registerGet)

router.post('/register', userControllers.registerPost)

router.get('/login', userControllers.loginGet)

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'Alguma coisa tá errada, jogador(a)! Tenta de novo'}), userControllers.loginPost)

router.get('/logout', userControllers.logout)

module.exports = router