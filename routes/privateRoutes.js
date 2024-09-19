const express = require('express');
const { getPrivatePage } = require('../controllers/privateController');
const router = express.Router();

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
}

// Private route
router.get('/private-page', isAuthenticated, getPrivatePage); // Ensure this matches the path you want to access

module.exports = router;
