const ItemModel = require('../models/items')

const addItem = async (req, res) => {

    const { name, tier } = req.body    
    
    try{
        const item = new ItemModel({ name, tier, userID: req.user._id })
        await item.save()
        res.status(200).json(item)
    }
    catch(err){
        console.error(err)
    }
    
}

const getItems = async (req, res) => {
    
    try{
        const items = await ItemModel.find({userID: req.user._id})
        res.status(200).json(items)
    }
    catch(err){
        console.error(err)
    }
}

const upgradeItem = (req, res) => {

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
}

const downgradeItem = (req, res) => {
    
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
}

const deleteItem = async (req, res) => {
    
    const { id } = req.params
    
    try{
        await ItemModel.findByIdAndRemove(id)
        res.status(200).json({message:"Item Deleted Successfully"})
    }
    catch(err){
        console.error(err)
    }
}

module.exports = { addItem, getItems, upgradeItem, downgradeItem, deleteItem }