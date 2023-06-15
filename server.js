const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const itemsRoutes = require('./routes/items')
const userRoutes = require('./routes/users')
require('dotenv').config()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

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