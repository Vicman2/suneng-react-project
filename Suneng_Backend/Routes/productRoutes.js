const express = require('express')

const router = express.Router()
const productController = require('../Controller/productController')


router.get('/allProducts', productController.getProducts)

module.exports = router