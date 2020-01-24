const jwt = require('jsonwebtoken')
const config = require('../Config/index')

exports.generateToken = async(data) => {
    const token = await jwt.sign(data, config.publicKey)
    return token
}

exports.decodeToken = async(token) => {
    try {
        const validToken  = await jwt.verify(token, config.publicKey);
        return {success: true, token: validToken}
    } catch (error) {
        return{success: false, message: "Invalid token", error: error}
    }
}