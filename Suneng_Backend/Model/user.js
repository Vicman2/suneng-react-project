const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserModel = new Schema({
    name: {
        type: String,
        min:3,
        max: 30, 
        required: true
    }, 
    email:{
        type: String,
        unique: true,
        required:true
    }, 
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

module.exports = mongoose.model("User", UserModel)