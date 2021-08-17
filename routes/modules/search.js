// 載入express & express-router
const express = require('express')
const router = express.Router()

// 載入Restaurant model
const Restaurant = require('../../models/restaurant')

// search results routes setting
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const keywordRegex = new RegExp(keyword, 'i')
  return Restaurant.find({ $or: [{ name: { $regex: keywordRegex } }, { category: { $regex: keywordRegex } }] })
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.log(error))
})

// 匯出router
module.exports = router