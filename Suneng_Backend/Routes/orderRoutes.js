const express = require('express')
const authMiddleware = require('../Middleware/Authenticate')
const orderMiddleWare = require('../Middleware/validateOrder')
const orderController = require('../Controller/orderController')

const router = express.Router();

router.post('/order-product',authMiddleware.authentication, orderMiddleWare.postOrder,orderController.postOrder)

router.get('/get-order', authMiddleware.authentication, orderController.getOrders)

module.exports = router