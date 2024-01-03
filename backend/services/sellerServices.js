const { sellerSchema } = require("../models/Seller");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { error } = require("console");

require('dotenv').config()
async function signUp(name, password,email) {
    // console.log("inside signup function")
    const isUseralready = await sellerSchema.findOne({email:email})

    if(!isUseralready){

        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new sellerSchema({ name, password: hashedPassword,email });
        await newUser.save();
        return;
    }
    throw new Error("User already exist")
}

async function logIn(email, password){
    const user = await sellerSchema.findOne({email})
    if(!user){
        throw new Error('User not found')
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) throw new Error("Invalid Password")
    const token= jwt.sign({userId:user._id, email:user.email},process.env.SECRET_KEY)
    return {token,username:user.name}
}

async function sellerLoggedInGreeting(name){
    return `hi ${name}, welcome again`;
}
  


module.exports = { signUp,logIn,sellerLoggedInGreeting };

