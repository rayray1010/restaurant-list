// 載入express & express-router
const express = require('express')
const router = express.Router()

// 載入router
const home = require('./modules/home')
const restaurant = require('./modules/restaurant')
const users = require('./modules/users')

// 導引routes
router.use('/', home)
router.use('/restaurants', restaurant)
router.use('/users', users)

// 匯出router
module.exports = router