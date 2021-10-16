// 啟用strict mode
'use strict'

// 如果不是本地開發環境就載入.env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 載入所需套件
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
const usePassport = require('./config/passport')
const flash = require('connect-flash')

// 套件相關setting
const app = express()
const PORT = process.env.PORT

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  // express-handlebars helpers setting
  helpers: {
    isEqual: function (a, b) { return a === b }
  }
}))
app.set('view engine', 'handlebars')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.error = req.flash('error')
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// routes setting
app.use(routes)

// Listen the server when it started
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})