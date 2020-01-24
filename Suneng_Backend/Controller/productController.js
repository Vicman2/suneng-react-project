const productServices = require('../Services/productServices')

exports.getProducts = async(req, res, next)=> {
    const data= await productServices.getProducts()
    if(!data.success) return res.status(401).json(data) 
    res.status(200).send({data})
}