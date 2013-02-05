var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {name: String
      }
);

var twitSchema = mongoose.Schema(
    {user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        text: String
      }
);

console.log("registering");

mongoose.model('Twit', twitSchema);
mongoose.model('User', userSchema);