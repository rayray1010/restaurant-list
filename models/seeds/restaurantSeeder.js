// 載入mongoose
const mongoose = require('mongoose')

// 載入restaurant.json
const restaurantList = require('../../restaurant.json').results

// 載入Restaurant model
const Restaurant = require('../restaurant')

// setting mongoose
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

// return mongodb connect info
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  // 新增種子資料
  for (let restaurant of restaurantList) {
    Restaurant.create({
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description,
    })
  }
  console.log('done!')
})