// 載入express & express-router
const express = require('express')
const router = express.Router()

// 載入router
const home = require('./modules/home')
const restaurant = require('./modules/restaurant')
const search = require('./modules/search')
const sort = require('./modules/sort')

// 導引routes
router.use('/', home)
router.use('/restaurants', restaurant)
router.use('/search', search)
router.use('/sort', sort)

// 匯出router
module.exports = router