// 載入mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// setting Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name_en: {
    type: String,
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
  google_map: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  description: {
    type: String,
  },
})

// 輸出Schema
module.exports = mongoose.model('Restaurant', restaurantSchema)