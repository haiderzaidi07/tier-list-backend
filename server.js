const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const ItemModel = require('./models/Items')
require('dotenv').config()


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true })
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.post('/addItem', async (req, res) => {

    const { name, tier } = req.body    
    
    try{
        const item = new ItemModel({ name, tier })
        await item.save()
        res.status(200).json(item)
    }
    catch(err){
        console.error(err)
    }
    
})

app.get('/', async (req, res) => {
    
    try{
        const items = await ItemModel.find()
        res.status(200).json(items)
    }
    catch(err){
        console.error(err)
    }
})

app.put('/upgrade', (req, res) => {

    const { newTier, id } = req.body

    try{
        ItemModel.findById(id)
        .then(itemToUpgrade => {
            itemToUpgrade.tier = newTier
            itemToUpgrade.save()

            res.status(200).send({result: itemToUpgrade, message:"Upgraded Tier"})
        })
        .catch(err => console.error(err))
        
    }
    catch(err){
        console.error(err)
    }
})

app.put('/downgrade', async (req, res) => {
    
    const { newTier, id } = req.body

    try{
        ItemModel.findById(id)
        .then(itemToUpgrade => {
            itemToUpgrade.tier = newTier
            itemToUpgrade.save()

            res.status(200).send({result: itemToUpgrade, message:"Downgraded Tier"})
        })
        .catch(err => console.error(err))
        
    }
    catch(err){
        console.error(err)
    }
})

app.delete('/delete/:id', async (req, res) => {
    
    const { id } = req.params
    
    try{
        await ItemModel.findByIdAndRemove(id)
        res.status(200).json({message:"Item Deleted Successfully"})
    }
    catch(err){
        console.error(err)
    }
})

app.listen(process.env.PORT, () =>{
    console.log(`Listening on ${process.env.PORT}`)
})