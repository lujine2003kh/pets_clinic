const User = require('../models/signup');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
exports.getUsers = async (req,res)=>{
    try{
        console.log('this is a function to get users')
         const users = await User.find();
         res.json(users);
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
}
exports.UserLogin=async(req,res)=>{
    const{email,password}=req.body;
    console.log(email)
    try{
        const user=await User.findOne({email});
        console.log(!user)
        if(!user){
            return res.status(400).json({message:'user not found!!!!'});
        }
        //check pass
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'wrong user or password'});
        }
        //enc
        const token=jwt.sign({userId:user._id},'jhdvfevfigfedfvui',{
            expiresIn:'1h',
        });
        res.status(200).json({message:"user found!",token});
    }
    catch(error){
        res.status(500).json({error:error.message});
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