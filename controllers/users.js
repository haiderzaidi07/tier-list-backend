const User = require('../models/users')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = async (req, res) => {

    const { username, password } = req.body

    try{
        const user = await User.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

const registerUser = async (req, res) => {

    const { username, password, confirmPassword } = req.body

    try{
        const user = await User.register(username, password, confirmPassword)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = { registerUser, loginUser }