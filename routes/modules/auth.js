// 載入所需套件
const express = require('express')
const passport = require('passport')
const router = express.Router()

// facebook routes setting
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email', 'public_profile']
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

// router export
module.exports = router