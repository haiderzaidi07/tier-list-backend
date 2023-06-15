const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const itemsRoutes = require('./routes/items')
const userRoutes = require('./routes/users')
require('dotenv').config()

app.use(express.json())
app.use(cors({
    origin: 'https://colorful-lamb-pinafore.cyclic.app/',
    credentials: true
}))

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true })
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.use('/', itemsRoutes)
app.use('/users', userRoutes)

app.listen(process.env.PORT, () =>{
    console.log(`Listening on ${process.env.PORT}`)
})