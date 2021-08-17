// 啟用strict mode
'use strict'

// 載入express
const express = require('express')
const app = express()
const port = 3000

// 載入express-handlebars
const exphbs = require('express-handlebars')

// 載入mongoose
const mongoose = require('mongoose')
const restaurant = require('./models/restaurant')

// 載入Restaurant model
const Restaurant = require('./models/restaurant')

// 載入method-override
const methodOverride = require('method-override')

// setting mongoose
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// return mongodb connect info
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting method-override
app.use(methodOverride('_method'))

// general routes setting
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// restaurant-info routes setting
app.get('/restaurants/:restaurantId/detail', (req, res) => {
  const id = req.params.restaurantId
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// create new restaurant routes setting
app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit restaurant routes setting
app.get('/restaurants/:restaurantId/edit', (req, res) => {
  const id = req.params.restaurantId
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

app.put('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete restaurant route setting
app.delete('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// search results routes setting
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const keywordRegex = new RegExp(keyword, 'i')
  return Restaurant.find({ $or: [{ name: { $regex: keywordRegex } }, { category: { $regex: keywordRegex } }] })
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.log(error))
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})