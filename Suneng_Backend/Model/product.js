const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const product = new Schema({
    name : {
        required: true, 
        type: String
    },
    machineSource:{
        type: String, 
        required: true
    }, 
    details: {
        type: String, 
        required: true
    }
})

module.exports  = mongoose.model("product", product);