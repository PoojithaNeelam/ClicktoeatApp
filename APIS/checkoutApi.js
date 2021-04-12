//mini express
const exp=require("express")

const paymentApiObj=exp.Router()

//import bcrypt
const bcrypt=require("bcryptjs")

//import express-async-handler
const errorhandler=require("express-async-handler")

//import jsonwebtoken
const jwt=require("jsonwebtoken")

//import user model
const Payment=require("../models/checkout")


//import middleware
const validateToken=require("./middlewares/verifytoken")

//payload data
paymentApiObj.use(exp.json())

//dotenv
require("dotenv").config()



paymentApiObj.post("/createpayment",errorhandler(async(req,res)=>{
    console.log("Payment Details are",req.body)

    let paymentObjToModel=new Payment({
        chname:req.body.chname,
        cnum:req.body.cnum,
        mm:req.body.mm,
        yyyy:req.body.yyyy
    })

    if(await Payment.findOne({chname:req.body.chname})==null){
        await paymentObjToModel.save()
        console.log("Payment Details in api",paymentObjToModel)

        res.send({message:"Payment done successfully",paymentObjToModel})
    }
    else{
        res.send({message:"Payment details already existed"})
    }
}))





//export api to server
module.exports=paymentApiObj