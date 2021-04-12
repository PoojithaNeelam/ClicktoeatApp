//mini express
const exp=require("express")

const userApiObj=exp.Router()

//import bcrypt
const bcrypt=require("bcryptjs")

//import express-async-handler
const errorhandler=require("express-async-handler")

//import jsonwebtoken
const jwt=require("jsonwebtoken")

//import user model
const User=require("../models/user")


//import middleware
const validateToken=require("./middlewares/verifytoken")

//payload data
userApiObj.use(exp.json())

//dotenv
require("dotenv").config()


//create user
/*userApiObj.post("/createuser",validateToken, errorhandler(async (req,res)=>{

console.log(req.body)
    let hashedpassword=await bcrypt.hashSync(req.body.password,8)
    let userObjtoModel=new User({
        email:req.body.email,
        username:req.body.username,
        password:hashedpassword,
        mobilenumber:req.body.mobilenumber
    })

    if(await User.findOne({username:req.body.username})==null){
        await userObjtoModel.save()

        res.send({message:"Registration done successfully"})
    }
    else{
        res.send({message:"You have already registered. Login to continue!"})
    }

}))*/

userApiObj.post("/createuser",errorhandler(async (req,res)=>{
    console.log("Create user details of",req.body)
    let userFromDb=await User.findOne({username:req.body.username})

    if(userFromDb==null){
        let hashedpassword = await bcrypt.hash(req.body.password,8)

        let userObj=new User({
            email:req.body.email,
            username:req.body.username,
            password:hashedpassword,
            mobilenumber:req.body.mobilenumber

        })
        await userObj.save()
        res.send({message:"Registration done successfully",userObj})
    }

    else
    {
        res.send({message:"You have already have an account!!!"})
    }
}))

//login user
userApiObj.post("/login",errorhandler(async (req,res)=>{

    let userFromDb=await User.findOne({username:req.body.username})

    //if does not exist
    if(userFromDb==null){
        res.send({message:"Failed to Login",reason:"Invalid Username"})
    }
    else{

        //if exists in database
        let result=await bcrypt.compare(req.body.password,userFromDb.password)

        //if password not matched
        if(result==false){
            res.send({message:"Failed to Login",reason:"Inavlid password"})
        }
        else{
            //if password matches
            let signedToken=await jwt.sign({username:req.body.username},process.env.SECRET,{expiresIn : 100000})

            //send token with response
            res.send({message:"Login success",token:signedToken,username:req.body.username})
        }
    }
}))


userApiObj.get("/getuesrs",errorhandler(async (req,res)=>{
    let userArray=await User.find()
    res.send({message:userArray})
}))

userApiObj.get("/getuser/:username",validateToken,errorhandler(async( req,res)=>{
    let userObj= await User.findOne({username:req.params.username})
    res.send({message:"Username for profile",userObj})
}))


//export api to server
module.exports=userApiObj