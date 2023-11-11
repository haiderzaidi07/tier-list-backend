const express = require('express')
const router = express.Router()
const passport = require('passport')
const { registerUser, loginUser, loginGoogle, loginGithub, loginDiscord } = require('../controllers/users')

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/google', passport.authenticate("google", { scope: ['profile'] }))
router.get('/google/redirect', passport.authenticate("google"), loginGoogle)

router.get('/github', passport.authenticate("github", { scope: ['profile'] }))
router.get('/github/redirect', passport.authenticate("github"), loginGithub)

router.get('/discord', passport.authenticate("discord", { scope: ['identify'] }))
router.get('/discord/redirect', passport.authenticate("discord"), loginDiscord)

module.exports = router