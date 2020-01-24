const joi = require('joi')


exports.postOrder = (req, res, next) => {
    console.log()
    const Schema = {
        productId :joi.string().required()
    }
    const validate = joi.validate(req.body, Schema)
    if(validate.error) return res.status(401).send({success: false, message:"No product Id specified"})
    next()
}