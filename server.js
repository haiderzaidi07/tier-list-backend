const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const itemsRoutes = require('./routes/items')
const userRoutes = require('./routes/users')
require('dotenv').config({ path: './config/.env' })
require('./config/passport')

app.use(express.json())
app.use(cors({
    // origin: 'https://tier-list.netlify.app',
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(session({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.use('/', itemsRoutes)
app.use('/users', userRoutes)

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening on ${process.env.PORT}`)
    })
})
.catch(err => console.error(err))
