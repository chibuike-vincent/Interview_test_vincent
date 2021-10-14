const jwt = require('jsonwebtoken')
const user = require('../models/user')
const secret = process.env.AUTH_SECRET
module.exports = (req,res,next)=>{
    const{authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"not authorized"})
    }
   const token=  authorization.replace("Bearer ","");
    jwt.verify(token,secret,(error,payload)=>{
        if(error){
            res.status(400).json({error:"invalid token provided"})
        }
        const{id}= payload;
        user.findById(id)
        .then(userInfo=>{
            req.user = userInfo
            next()
        })
    })

}