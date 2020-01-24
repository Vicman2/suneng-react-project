const userServices = require('../Services/userServices')

exports.postContactInfo = async (req, res, next) => {
    const validBody = req.body;
    const done = await userServices.saveContactUsDetails(validBody);
    if(done) res.status(201).send({success: true, message: "Contact feedback have been added successfully"})
}

exports.postSignIn = async(req, res, next) => {
    const validatedBody = req.body;
    const response = await userServices.saveUserDetails(validatedBody);
    if(!response.success) return res.status(400).send(response);
    res.status(201).send(response)
}

exports.login= async(req, res, next) => {
    const validatedBody = req.body;
    const response = await userServices.login(validatedBody);
    if(!response.success) return res.status(401).send(response)
    res.status(200).send(response)
}