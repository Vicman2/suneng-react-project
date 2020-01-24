const productModel = require('../Model/product')

exports.getProducts = async()=> {
    const products = await productModel.find()
    if(!products) return {success: false, message: "No product to fetch"}
    return {success: true, message: "Products fetched successfully", data: products}
}