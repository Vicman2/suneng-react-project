const joi = require('joi')

exports.validateContatInfo = (req, res, next)=>{
    const schema = {
        name: joi.string().min(3).max(30).required(), 
        email: joi.string().email().required(),
        phone: joi.string().required(), 
        subject: joi.string().min(15).required()
    }
    const result = joi.validate(req.body, schema)
    if(result.error)   return res.status(401).json({success: false, message:result.error.message})
    next()
}