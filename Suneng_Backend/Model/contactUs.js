const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const details = new Schema({
    name:{
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }, 
    subject: {
        type: String,
        required: true,
    }

    
})

module.exports = mongoose.model("ContactUs", details)