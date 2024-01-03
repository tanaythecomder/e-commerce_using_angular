const express = require('express')
const sellerServices =require('../services/sellerServices');
const { authentication } = require('../middleware/auth');
const router = express.Router();

router.post('/signup',async (req,res)=>{
    const {name,password,email} = req.body
    try{
        await sellerServices.signUp(name, password,email);
        res.status(201).json({message:"Signup Succesfully"})
    }
    catch(error){
        
        res.status(400).json({error:error.message })
    }
})

router.post('/login',async (req,res)=>{
    const {email, password} = req.body
    try{
        const token = await sellerServices.logIn(email, password);
        res.status(201).json({message:"LoggedIn Succesfully",...token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

router.get('/sellergreeting',authentication,async (req,res)=>{
    try{
        const username= req.query.username
        const message = await sellerServices.sellerLoggedInGreeting(username);
        res.status(200).json({message})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})


module.exports = router