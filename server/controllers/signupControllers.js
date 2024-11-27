const User = require('../models/signup');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
exports.createUser = async (req,res)=>{
    const {firstname,lastname,phonenumber,password,email,petsname}= req.body;
    // console.log(username,phone);

    try{
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser={firstname:firstname,lastname:lastname,phonenumber:phonenumber,password:hashedPassword,email:email,petsname:petsname};
        console.log(newUser);
        const dbUser = await User.create(newUser)
        res.status(200).json({message: `User created successfully ${newUser}`});
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.verifyJwtToken=async(req,res,next)=>{
    try{
        const token=req.header('Auth').replace('Bearer ','');
        console.log(token);
        if(!token){
            return res.status(401).json({message:"No token,authorization denied !"});
        }
        console.log('before jwt verify')
        const verified=jwt.verify(token,'jhdvfevfigfedfvui');
        req.user=verified.userId;
        console.log(req.user);
        next();
    }
    catch(error){
        res.status(401).json({message:'Token is not valid !'})
    }
}