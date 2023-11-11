const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const GithubStrategy = require('passport-github2')
const DiscordStrategy = require('passport-discord')
const User = require('../models/users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user)
    })
    .catch(err => console.error(err))
})

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/users/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {

        const authenticate = async () => {
            const exists = await User.findOne({ googleId: profile.id })

            if(exists){
                done(null, exists)
            }
            else{
                const user = await User.create({ username: profile.displayName, googleId: profile.id, profilePicture: profile.photos[0].value })
                done(null, user)
            }
        }

        authenticate()
    })
)

passport.use(
    new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/users/github/redirect'
    }, (accessToken, refreshToken, profile, done) => {

        const authenticate = async () => {
            const exists = await User.findOne({ githubId: profile.id })

            if(exists){
                done(null, exists)
            }
            else{
                const user = await User.create({ username: profile.username, githubId: profile.id, profilePicture: profile.photos[0].value })
                done(null, user)
            }
        }

        authenticate()
    })
)

passport.use(
    new DiscordStrategy({
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: '/users/discord/redirect'
    }, (accessToken, refreshToken, profile, done) => {

        const authenticate = async () => {
            const exists = await User.findOne({ discordId: profile.id })

            if(exists){
                done(null, exists)
            }
            else{
                const profilePicture = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
                const user = await User.create({ username: profile.username, discordId: profile.id, profilePicture })
                done(null, user)
            }
        }

        authenticate()
    })
)