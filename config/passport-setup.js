// config\passport-setup.js
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();
console.log('Passport GitHub strategy initialized');

passport.use(new GitHubStrategy({
    

    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback', 
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, { username: profile.username, accessToken });
  }
  
));
console.log('Passport GitHub strategy initialized1');
// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
