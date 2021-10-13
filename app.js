// 啟用strict mode
'use strict'

// 載入所需套件
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')

// 套件相關setting
const app = express()
const port = 3000

app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  // express-handlebars helpers setting
  helpers: {
    isEqual: function (a, b) { return a === b }
  } }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

// routes setting
app.use(routes)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})