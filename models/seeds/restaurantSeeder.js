// 啟用strict mode
'use strict'

// 如果不是本地開發環境就載入.env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 載入所需套件
const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
const restaurantList = require('../../restaurant.json').results
const Restaurant = require('../restaurant')
const User = require('../user')

// 新增種子使用者資訊
const SEED_USER = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678',
    restaurantList_index: [0, 1, 2]
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678',
    restaurantList_index: [3, 4, 5]
  }
]

// 新增種子資料
db.once('open', () => {
  Promise.all(
    Array.from(SEED_USER, seedUser => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seedUser.password, salt))
        .then(hash => User.create({
          name: seedUser.name,
          email: seedUser.email,
          password: hash
        }))
        .then(user => {
          const userId = user._id
          const restaurant = []
          Array.from(seedUser.restaurantList_index, index => {
            restaurantList[index].userId = userId
            restaurant.push(restaurantList[index])
          })
          return Restaurant.create(restaurant)
        })
    }))
    .then(() => {
      console.log('done')
      process.exit()
    })
    .catch(err => console.log(err))
})