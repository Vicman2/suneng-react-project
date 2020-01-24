const orderModel = require("../Model/order")

exports.postOrder = async(productId, userId)=>{
   const existingOrderByUser =  await orderModel.findOne({userId:userId})
   if(existingOrderByUser){
       existingOrderByUser.userOrders.push({
            product: productId   
       })
       const saved = await existingOrderByUser.save()
       return {status: true, message: "Order have been added for the user", data: saved}
   }else{
       const newOrder = new orderModel({
           userId: userId, 
           userOrders: [
               {
                    product: productId
               }
           ]
       })
       const saved = await newOrder.save()
       return {status: true, message: "An order have been created for this user", data: saved}
   }
}

exports.getOrder = async(userId) => {
    const existingUser = await orderModel.findOne({userId:userId}).populate('userOrders.product')
    if(!existingUser) return {success: false, message: "You have not created an order yet"}
    return {success: true, message:"Order feteched successfully" , data: existingUser.userOrders}
}