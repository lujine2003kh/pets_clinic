const User = require('../models/home');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
exports.getUsersNames = async (req,res)=>{
    try{
        const users = await User.find();
        console.log('this is a function to get users names')
        const firstname = users.map(
            user =>{
                var object={_id:user._id,firstname: user.firstname};
                return object;  // return an object with Firstname property
            }
        );

        res.json(firstname);
   }
   catch(error) {
       res.status(500).json({error: error.message});
   }
}
exports.home=async(req,res)=>{
    user=req.user;
    try{
        checkUser=await User.findById(user);
        res.status(200).json({message:"Welcome to home page ",user:checkUser.username});
    }
    catch(error){
        res.status(500).json({message:'Error in home page !'});

    }
}
