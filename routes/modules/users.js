// 載入所需套件
const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')

// login routes setting
router.get('/login', (req, res) => {
  res.render('login', { layout: 'loginRegister' })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

// register routes setting
router.get('/register', (req, res) => {
  res.render('register', { layout: 'loginRegister' })
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.findOne({ email }).then(user => {
    if (user) {
      console.log('The email already exists!')
      res.render('register', { layout: 'loginRegister', name, email, password, confirmPassword })
    } else {
      User.create({
        name,
        email,
        password
      })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  })
})

// logout routes setting
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users.login')
})

// router export
module.exports = router