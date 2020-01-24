const joi = require('joi')

exports.validateSignUp = async(req, res, next) => {
    const Schema = {
        name: joi.string().min(3).max(30).required(),
        email:joi.string().email().required(),
        password:joi.string().required()
    }
    const result = joi.validate(req.body, Schema)
    if(result.error) return res.status(401).json({success: false,message: result.error.message})
    next()
}

exports.validateLogin  = async(req, res, next)=>{
    const Schema = {
        email: joi.string().email().required(), 
        password: joi.string().required(),
    }
    const result = joi.validate(req.body, Schema)
    if(result.error) return res.status(401).json({success: false, message: result.error.message})
    next()
}