const User = require('../models/userModel');
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
exports.getUsersNames = async (req,res)=>{
    try{
        const users = await User.find();
        console.log('this is a function to get users names')
        const usernames = users.map(
            user =>{
                var object={_id:user._id,firstname: user.firstname,lastname:user.lastname,phonenumber:user.phonenumber,password:user.password
                    ,email:user.user,petsname:user.petsname,
                };
                return object;  // return an object with username property
            }
        );

        res.json(usernames);
   }
   catch(error) {
       res.status(500).json({error: error.message});
   }
}
exports.createUser = async (req,res)=>{
    const {username,phone,password}= req.body;
    // console.log(username,phone);

    try{
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser={username: username,phone: phone,password:hashedPassword};
        console.log(newUser);
        const dbUser = await User.create(newUser)
        res.status(200).json({message: `User created successfully ${newUser}`});
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.deleteUser=async(req,res)=>{
try {
    const id = req.params.id
    var deleteUser = await User.findByIdAndDelete({_id:id})
    res.status(200).json({
        message:"usere were deleted"    })


} catch (error) {
    res.status(400).json({error: error.message});
}
}
exports.UpdateUser=async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id);
        const{username,phone}=req.body
        console.log(username,phone);
        var updateUser=await User.findByIdAndUpdate(id,{username:username,phone:phone})
        res.status(200).json({
            message:"usere were updated"    })


    } catch (error) {
        res.status(400).json({error: error.message});
    }
    }

exports.UserLogin=async(req,res)=>{
    const{username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user){
            return res.status(400).json({message:'user not found!'});
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
