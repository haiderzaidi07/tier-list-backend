const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    tier:{
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const ItemModel = mongoose.model('items', ItemSchema)

module.exports = ItemModel
