// 載入所需套件
const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

// login routes setting
router.get('/login', (req, res) => {
  res.render('login', { layout: 'loginRegister' })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))

// register routes setting
router.get('/register', (req, res) => {
  res.render('register', { layout: 'loginRegister' })
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (!email || !password || !confirmPassword) {
    errors.push({ message: '必填欄位未填寫' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相同' })
  }
  if (errors.length) {
    res.render('register', { layout: 'loginRegister', errors, name, email, password, confirmPassword })
  }
  User.findOne({ email }).then(user => {
    if (user) {
      errors.push({ message: '此Email已經註冊過了' })
      return res.render('register', { layout: 'loginRegister', errors, name, email, password, confirmPassword })
    }
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(password => User.create({ name, email, password }))
      .then(() => {
        req.flash('success_msg', '您已經成功註冊')
        res.redirect('/users/login')
      })
      .catch(err => console.log(err))
  })
})

// logout routes setting
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '您已經成功登出帳號')
  res.redirect('/users/login')
})

// router export
module.exports = router