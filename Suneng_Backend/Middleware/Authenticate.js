const util = require('../utility/util')
exports.authentication = async(req, res, next)=>{
    console.log(req.body)
    const token = await util.decodeToken(req.headers["x-access-token"])
    if(!token.success) return res.status(403).json(token)
    req.user = token.token
    next()
}