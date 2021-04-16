//mini express
const exp=require("express")

const adminApiObj=exp.Router()

//import bcrypt
const bcrypt=require("bcryptjs")

//import express-async-handler
const errorhandler=require("express-async-handler")

//import jsonwebtoken
const jwt=require("jsonwebtoken")

//import user model
const Admin=require("../models/admin")

//import middleware
const validateToken=require("./middlewares/verifytoken")

//payload data
adminApiObj.use(exp.json())

//dotenv
require("dotenv").config()


//create user
adminApiObj.post("/createadmin",errorhandler(async (req,res)=>{

console.log(req.body)
    let hashedpassword=await bcrypt.hashSync(req.body.password,8)
    let adminObjtoModel=new Admin({
        username:req.body.username,
        password:hashedpassword
    })

    if(await Admin.findOne({username:req.body.username})==null){
        await adminObjtoModel.save()

        res.send({message:"Admin created successfully"})
    }
    else{
        res.send({message:"You have an account. Login to continue!"})
    }

}))



//login user
adminApiObj.post("/loginadmin",errorhandler(async (req,res)=>{

    let adminFromDb=await Admin.findOne({username:req.body.username})

    //if does not exist
    if(adminFromDb==null){
        res.send({message:"Failed to Login",reason:"Invalid Username"})
    }
    else{

        //if exists in database
        let result=await bcrypt.compare(req.body.password,adminFromDb.password)

        //if password not matched
        if(result==false){
            res.send({message:"Failed to Login",reason:"Inavlid password"})
        }
        else{
            //if password matches
            let signedToken=await jwt.sign({username:req.body.username},process.env.SECRET,{expiresIn : 10})

            //send token with response
            res.send({message:"Login success",token:signedToken,username:req.body.username})
        }
    }
}))





//export api to server
module.exports=adminApiObj