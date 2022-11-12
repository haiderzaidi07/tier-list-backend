const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const ItemModel = require('./models/Items')
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_STRING, 
    { useNewUrlParser: true}
)

app.post('/addItem', async (req, res) => {

    const name = req.body.name
    const tier = req.body.tier
    const item = new ItemModel({ name: name, tier: tier })
    await item.save()
    res.send(item)
})

app.get('/', async (req, res) => {
    
    const result = await ItemModel.find().clone()
    res.send(result)
})

app.put('/upgrade', async (req, res) => {

    const newTier = req.body.newTier
    const id = req.body.id

    try{
        await ItemModel.findById(id, (error, itemToUpgrade) => {
            itemToUpgrade.tier = newTier
            itemToUpgrade.save()
        }).clone()
    }
    catch(err){
        console.error(err)
    }

    res.send("Upgraded")
})

app.put('/downgrade', async (req, res) => {
    
    const newTier = req.body.newTier
    const id = req.body.id
    
    try{
        await ItemModel.findById(id, (error, itemToUpgrade) => {
            itemToUpgrade.tier = newTier
            itemToUpgrade.save()
        }).clone()
    }
    catch(err){
        console.error(err)
    }
    
    res.send("Downgraded")
})

app.delete('/delete/:id', async (req, res) => {
    
    const id = req.params.id
    await ItemModel.findByIdAndRemove(id).exec()
    res.send("Deleted")
})

app.listen(process.env.PORT, () =>{
    console.log(`Listening on ${process.env.PORT}`)
})