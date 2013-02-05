var mongoose = require('mongoose');
var User = mongoose.model('User');
var Twit = mongoose.model('Twit');

exports.new_post = function(req, res){
  console.log("posted");
  console.log(req.session.user);
  if(req.body.twit.length>140) {
    res.send("Twit is too long!");
  } else {
      var newtwit = new Twit({ user: req.session.user, text: req.body.twit});
        newtwit.save(function (err) {
          if (err) console.log(err);
          res.send("");
        });
  }
};