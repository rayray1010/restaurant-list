// 載入所需套件
const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

// 載入router
const home = require('./modules/home')
const restaurant = require('./modules/restaurant')
const users = require('./modules/users')

// 導引routes
router.use('/restaurants', authenticator, restaurant)
router.use('/users', users)
router.use('/', authenticator, home) // 寬鬆的路由放後面

// 匯出router
module.exports = router