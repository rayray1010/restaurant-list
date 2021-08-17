// 載入mongoose設定檔
const db = require('../../config/mongoose')

// 載入restaurant.json
const restaurantList = require('../../restaurant.json').results

// 載入Restaurant model
const Restaurant = require('../restaurant')

// 新增種子資料
db.once('open', () => {
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