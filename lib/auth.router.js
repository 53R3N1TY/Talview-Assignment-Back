const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('./auth.controller')

// Setting up the passport middleware for OAuth
const githubAuth = passport.authenticate('github')

// Routes that are triggered by the callbacks from github once 
// the user has authenticated successfully
router.get('/github/callback', githubAuth, authController.github)

router.use((req, res, next) => {
  req.session.socketId = req.query.socketId
  next()
})

// Routes that are triggered on the client
router.get('/github', githubAuth)

module.exports = router