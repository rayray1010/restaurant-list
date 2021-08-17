// 載入express & express-router
const express = require('express')
const router = express.Router()

// 載入Restaurant model
const Restaurant = require('../../models/restaurant')

// home page routes setting
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// 匯出router
module.exports = router