// 啟用strict mode
'use strict'

// 載入express
const express = require('express')
const app = express()
const port = 3000

// 載入存有restaurant-list的JSON檔
const restaurantList = require('./restaurant.json')

// 載入express-handlebars
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// general routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

// restaurant-info routes setting
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant })
})

// search results routes setting
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  const restaurant = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword) || restaurant.category.includes(keyword)) // 「餐廳名字」或「餐廳類別」有包含關鍵字，就存入變數restaurant中
  res.render('index', { restaurant, keyword })
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})