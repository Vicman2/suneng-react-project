const express = require('express')
require('express-async-errors')
const cors = require('cors')
const app = express()
const helmet = require('helmet')
const winston = require('winston')

const userRouter = require('./Routes/UserRoute')
const productRouter= require('./Routes/productRoutes')
const orderRouter = require('./Routes/orderRoutes')
const config = require('./Config')
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/machines", express.static('./public/machines'))
require("./Startup/database")()
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/order",orderRouter)
app.use((err, req, res, next)=> {
    console.log(err)
    res.status(500).send({status: false, message: "There is a server error"})
})

const Port = config.port
app.listen(Port, () => {
    console.log(`I am connected to ${Port}`)
})