// 載入所需套件
const express = require('express')
const router = express.Router()

// login routes setting
router.get('/login', (req, res) => {
  res.render('login', { layout: 'loginRegister' })
})

// register routes setting
router.get('/register', (req, res) => {
  res.render('register', { layout: 'loginRegister' })
})

// router export
module.exports = router