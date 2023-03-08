const User = require('../models/user')

module.exports.registerGet = (req, res) => {
    if(req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Tu já tá logado(a)!')
        return res.redirect('/')
        } 
    res.render('users/register.ejs')
}

module.exports.registerPost = async (req, res) => {
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
}

module.exports.loginGet = (req, res) => {
    if(req.isAuthenticated()) {
        req.flash('error', 'Calma lá, jogador(a)! Tu já tá logado!')
        return res.redirect('/')
        } 
    res.render('users/login.ejs')
}

module.exports.loginPost = (req, res) => {
    req.flash('success', `Bem-vindo(a) de volta ao jogBola, jogador(a)!`)
    res.redirect('/')
}

module.exports.logout = (req,res) => {
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
}