const jwt = require('jsonwebtoken')
const app = require('express')()

require('dotenv').config();

const authentication =(req, res, next)=>{

    const token = req.headers['authorization'].split(" ")[1]
    
    // console.log(token)
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    jwt.verify(token, process.env.SECRET_KEY,(err, user)=>{
        if(err){
            return res.status(403).json({message:"Forbidden"})
        }
        req.user = user;
        next();
    })
    
   
}

module.exports = {authentication}

