var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
   function(username, password, done) {
       if (username === "user" && password === "Did you know sentences make great passwords?")
       {
           return done(null, user);
       }
       else
       {
           return done(null, false);
       }
   }
));

exports.isAuthenticated = passport.authenticate('basic', { session: false });
