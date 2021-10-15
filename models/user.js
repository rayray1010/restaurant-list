// 載入套件
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema setting
const userSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// export Schema
module.exports = mongoose.model('User', userSchema)