// 載入express & express-router
const express = require('express')
const router = express.Router()

// 載入Restaurant model
const Restaurant = require('../../models/restaurant')

// restaurant-info routes setting
router.get('/:restaurantId/detail', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// create new restaurant routes setting
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const { name, name_en, category, location, phone, google_map, rating, description } = req.body
  // 如果使用者沒有存入圖片，就存預設圖片網址
  const image = req.body.image || "https://discountflooringsupplies.com.au/wp-content/uploads/blank-img.jpg"
  const userId = req.user._id
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit restaurant routes setting
router.get('/:restaurantId/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:restaurantId', (req, res) => {
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOneAndUpdate({ _id, userId }, { $set: req.body })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// delete restaurant route setting
router.delete('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// sort routes setting
router.get('/sort', (req, res) => {
  let order = req.query.order
  let asc = ''
  let desc = ''
  switch (order) {
    case '': asc = true
      break;
    case '-': desc = true
      break;
  }
  let sort = req.query.sort
  let name = ''
  let rating = ''
  switch (sort) {
    case 'name': name = true
      break;
    case 'rating': rating = true
  }
  sort = order + sort // 如果order是desc，傳入底下sort中就會是"-name" or "-rating"就會進行降冪排列
  const userId = req.user._id
  return Restaurant.find({ userId })
    .lean()
    .sort(sort)
    .then(restaurant => res.render('index', { restaurant, name, rating, asc, desc }))
    .catch(error => console.log(error))
})

// search results routes setting
router.get('/search', (req, res) => {
  const userId = req.user._id
  const keyword = req.query.keyword
  const keywordRegex = new RegExp(keyword, 'i')
  return Restaurant.find({ $and: [{ userId }, { $or: [{ name: { $regex: keywordRegex } }, { category: { $regex: keywordRegex } }] }] })
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.log(error))
})

// 匯出router
module.exports = router