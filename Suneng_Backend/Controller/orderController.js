const orderServices = require('../Services/orderServices')

exports.postOrder = async(req, res, next)=> {
    const productId = req.body.productId;
    const userId = req.user.id
    const madeOrder = await orderServices.postOrder(productId, userId)
    res.status(201).json(madeOrder)
}

exports.getOrders = async(req, res,next)=>{
    const userId = req.user.id;
    const servicerResoponse = await orderServices.getOrder(userId);
    if(!servicerResoponse.success) return res.status(400).json(servicerResoponse)
    res.status(200).json(servicerResoponse)
}