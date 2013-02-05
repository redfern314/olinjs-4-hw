
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.new = function(req, res){
  res.render("newuser",{title:"New User"});
  console.log(req.session.user);
};

exports.new_post = function(req, res){
  console.log(req.body.name);
  User.find({name: req.body.name}, function(err, docs) {
        if (err) console.log(err); // ...
        
        if (docs.length===0) {
            var user = new User({name:req.body.name});
            console.log(user._id);
            req.session.user = user._id;
            user.save(function (err){
                if (err) console.log(err);
                console.log("saved");
            });
          res.send("posted!");
        } else {
            console.log(docs[0]._id);
            console.log("----");
            console.log(req.session.user);

            req.session.user = docs[0]._id;
            console.log(req.session.user);
        }
    });
};