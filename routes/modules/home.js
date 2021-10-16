// 載入express & express-router
const express = require('express')
const router = express.Router()

// 載入Restaurant model
const Restaurant = require('../../models/restaurant')

// home page routes setting
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// 匯出router
module.exports = router