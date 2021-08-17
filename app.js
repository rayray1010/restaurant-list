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

// 載入method-override
const methodOverride = require('method-override')

// 載入routes
const routes = require('./routes')

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

// routes setting
app.use(routes)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})