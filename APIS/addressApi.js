//mini express
const exp=require("express")

const addressApiObj=exp.Router()

//import bcrypt
const bcrypt=require("bcryptjs")

//import express-async-handler
const errorhandler=require("express-async-handler")

//import jsonwebtoken
const jwt=require("jsonwebtoken")

//import user model
const Address=require("../models/address")


//import middleware
const validateToken=require("./middlewares/verifytoken")

//payload data
addressApiObj.use(exp.json())

//dotenv
require("dotenv").config()




addressApiObj.post("/createaddress",errorhandler(async (req,res)=>{
    console.log("Billing address is",req.body)
    
    let addressObjToModel= new Address({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address,
        flatnumber:req.body.flatnumber,
        city:req.body.city,
        country:req.body.country,
        pincode:req.body.pincode
    })

    if(await Address.findOne({firstname:req.body.firstname})==null){
        await addressObjToModel.save()
        console.log("Address details in api ",addressObjToModel)

        res.send({message:"Address added successfully!!!",addressObjToModel})
    }
    else
    {
        res.send({message:"Enter valid details to continue!!!"})
    }
   
}))





//export api to server
module.exports=addressApiObj