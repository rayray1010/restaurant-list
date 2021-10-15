// 載入所需套件
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

// passport setting & export
module.exports = app => {
  // passport初始化
  app.use(passport.initialize())
  app.use(passport.session())

  // LocalStrategy setting
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered.' })
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Password incorrect.' })
        }
        return done(null, user)
      })
      .catch(err => done(err, false))
  }))

  // serialize & deserialize setting 
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
}