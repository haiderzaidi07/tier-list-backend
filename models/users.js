const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static Register Method
userSchema.statics.register = async function (username, password, confirmPassword) {
    
    if(!username || !password){
        throw Error('All fields must be filled')
    }

    if(password !== confirmPassword){
        throw Error('Passwords do not match')
    }
    
    const exists = await this.findOne({ username })
    
    if(exists){
        throw Error('Username already in use')
    }
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const user = await this.create({ username, password: hashedPassword })

    return user
}

// Static Login Method
userSchema.statics.login = async function(username, password){
    
    if(!username || !password){
        throw Error('All fields must be filled')
    }
    
    const user = await this.findOne({ username })
    
    if(!user){
        throw Error('Incorrect Username')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return user
}

module.exports = mongoose.model("users", userSchema)