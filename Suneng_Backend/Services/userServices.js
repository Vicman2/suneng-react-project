const contactUsModel = require('../Model/contactUs');
const bcrypt = require('bcrypt')
const userModel = require('../Model/user')
const util = require('../utility/util')

exports.saveContactUsDetails = async function(data){
    const toSave = new contactUsModel(data);
    const saved = await toSave.save();
    return saved
}

exports.saveUserDetails = async function(data){
    const existingUser =   await userModel.findOne({email: data.email})
    if(existingUser) return {success: false,message: "User already exist"}
    const hashedPassword = await bcrypt.hash(data.password, 12);
    data.password = hashedPassword;
    const toSave = new userModel(data);
    const saved = await toSave.save()
    const token = await util.generateToken({id: saved._id, role: saved.role})
    const dataToSendToFrontEnd = {token: token,name:saved.name, email: saved.email}
    return {success: true, message: "User have signed up successfully",details: dataToSendToFrontEnd}
}

exports.login = async (data) => {
    const  existing = await userModel.findOne({email: data.email})
    if(!existing) return {success: false, message: "User do not exist"}
    const decryptedPassword = await bcrypt.compare(data.password, existing.password)
    if(!decryptedPassword) return {success: false, message: "Access denied !!!"}
    const token = await util.generateToken({id: existing._id, role: existing.role})
    return {success: true, message:"User logged in successfully",details: {
        token: token,
        name: existing.name,
        email: existing.email
    }}
}