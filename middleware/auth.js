// authenticator setting & export
module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    req.flash('warning_msg', '登入後才能使用此功能')
    res.redirect('/users/login')
  }
}