// 載入mongoose
const mongoose = require('mongoose')

// setting mongoose
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

// return mongodb connect info
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// 匯出db
module.exports = db