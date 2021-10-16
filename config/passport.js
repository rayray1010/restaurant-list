// 載入所需套件
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// passport setting & export
module.exports = app => {
  // passport初始化
  app.use(passport.initialize())
  app.use(passport.session())

  // LocalStrategy setting
  passport.use(new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, (req, email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false, req.flash('error', '此Email尚未註冊過，請先進行註冊'))
        }
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) {
              return done(null, false, req.flash('error', '密碼錯誤，請重新輸入'))
            }
            return done(null, user)
          })
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