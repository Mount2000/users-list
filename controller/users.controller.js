const shortid = require('shortid')

const db = require('../db')

module.exports.list = function(req, res) {
    res.render("users/list", {
        users: db.get("users").value()
    })}
module.exports.search = function(req, res)
{
  var q = req.query.q
  var matchedUser = db.get("users").value().filter(function(user){
    return user.name.indexOf(q) !== -1
  })
  res.render('users/search', {
    users: matchedUser
  })
}
module.exports.createGet = function(req, res){
    res.render('users/create')
  }
module.exports.createPost = function(req, res){
    req.body.id = shortid.generate()
    db.get("users").push(req.body).write()
    res.redirect('/users')
  }
module.exports.detail = function(req, res){
    var id = req.params.id
    var user = db.get('users').find( { id : id } ).value()
    res.render("users/detail", {
      user: user
    })
  }