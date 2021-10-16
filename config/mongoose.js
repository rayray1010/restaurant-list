// 載入mongoose
const mongoose = require('mongoose')
const MONGOOSE_URI = process.env.MONGOOSE_URI

// setting mongoose
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

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