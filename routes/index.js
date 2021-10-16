// 載入所需套件
const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

// 載入router
const home = require('./modules/home')
const restaurant = require('./modules/restaurant')
const users = require('./modules/users')
const auth = require('./modules/auth')

// 導引routes
router.use('/restaurants', authenticator, restaurant)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home) // 寬鬆的路由放後面

// 匯出router
module.exports = router