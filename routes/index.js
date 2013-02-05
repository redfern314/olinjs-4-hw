var mongoose = require('mongoose');
var User = mongoose.model('User');
var Twit = mongoose.model('Twit');

exports.index = function(req, res){
  Twit.find({}).populate("user").exec(function(err, twitdocs) {
    var loggedin = true;
    console.log("true");
    if(req.session.user==undefined) {
        loggedin = false;
        console.log("false");
    }
    res.render('index', { title: 'Crappy Twitter', twits: twitdocs, loggedin: loggedin });
  });
  };

exports.get_twits = function(req, res) {
    Twit.find({}).populate("user").exec(function(err, twitdocs) {
        res.render('_twits',{title:'Crappy Twitter',twits:twitdocs});
    });
}