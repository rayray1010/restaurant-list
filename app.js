// 啟用strict mode
'use strict'

// 載入express
const express = require('express')
const app = express()
const port = 3000

// 載入express-handlebars
const exphbs = require('express-handlebars')

// 載入method-override
const methodOverride = require('method-override')

// 載入routes
const routes = require('./routes')

// 載入mongoose 設定檔
require('./config/mongoose')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

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