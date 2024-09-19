const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes'); 
const privateRoutes = require('./routes/privateRoutes');
require('./config/passport-setup'); 

const app = express();

// Middleware setup
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1><a href="/auth/login">Login with GitHub</a>');
});

// Use routes
app.use('/auth', authRoutes); // Routes prefixed with '/auth'
app.use('/private', privateRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
