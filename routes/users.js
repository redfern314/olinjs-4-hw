
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.new = function(req, res){
  res.render("newuser",{title:"New User"});
  console.log("Current saved id",req.session.user);
};

exports.new_post = function(req, res){
  console.log(req.body.name);
  User.findOne({name: req.body.name}, function(err, doc) {
        if (err) return console.log(err); // ...
        
        if (!doc) {
            var user = new User({name:req.body.name});
            console.log("User object id",user._id);   
             
            user.save(function (err){
                if (err) return console.log(err);
                console.log("saved");
                req.session.user = user._id;
            console.log("Object id",user._id);
            console.log("New saved id",req.session.user); 
          res.send("posted!");
            });
            

        } else {
            console.log("Current saved id",req.session.user);
            console.log("Doc id",doc._id);
            

            req.session.user = doc._id;
            console.log("New saved id",req.session.user);

            res.send("posted!");
        }
    });
};