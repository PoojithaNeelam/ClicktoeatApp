const jwt=require("jsonwebtoken")
//import dotenv
require("dotenv").config()
 
const verifyToken=(req,res,next)=>{
 
    //read token from req obj header or header of the req obj(remove bearer that is 7 characters)
    let tokenWithBearer=req.headers["authorization"]
 
    //if token doesn't exist
    if(tokenWithBearer==undefined){
        res.send({message:"failed",reason:"Please login into your account...."})
        
    }
    //if token exists
    else{
        console.log("hello")
        //to verify token extract token by removing first 7 character
        let token=tokenWithBearer.slice(7,tokenWithBearer.length)
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if(err){
                return res.send({message:"Session expired..please relogin to continue"})
            }
            else{
                //forward to next handle
                next()
            }
        })
 
    }      
    }
 
    //if token is not existed
    //else{
      //  return res.send({message:"Unauthorized access"})
    //}
//}
//export middleware
module.exports=verifyToken;