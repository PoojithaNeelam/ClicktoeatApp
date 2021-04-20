const exp=require("express")
const cartApiObj=exp.Router()

const errorhandler=require("express-async-handler")

//import module
const Cart=require("../models/cart")
const Food=require("../models/food")

cartApiObj.use(exp.json())
require("dotenv").config()

//import middleware
const validateToken = require("./middlewares/verifytoken")

cartApiObj.post("/addtocart",errorhandler(async(req,res)=>{
    let cartFromDb=await Cart.findOne({$and:[{username:req.body.username},{foodItemID:req.body.foodItemID}]})

    if(cartFromDb==null){
        let newFoodObj=new Cart({
            username:req.body.username,
            restname:req.body.restname,
            RestaurentID:req.body.RestaurentID,
            foodtype:req.body.foodtype,
            fooditemname:req.body.fooditemname,
            foodItemID:req.body.foodItemID,
            Price:req.body.Price,
            status:req.body.status,
            photo:req.body.photo,
            quantity:1
        })
        await newFoodObj.save()
        res.send({message:"Food item added to cart"})
    }
    else
    {
        res.send({message:"Food already exists in cart"})
    }
}))


cartApiObj.get("/getcartitems/:username",validateToken,errorhandler(async(req,res)=>
{
    let cartRetriveArray=[];
    //console.log(req.params.username)
    let cartObj=await Cart.find({username:req.params.username})
    
   
    for(i=0;i<cartObj.length;i++)
    {
        //console.log(cartObj[i])
        let success = await Food.findOne({$and:[{foodItemID:cartObj[i].foodItemID},{status:true}]})
        //console.log("Admin cart delete is",success)
        if(success!=null)
        {
            let success2=await Cart.findOne({$and:[{username:req.params.username},{foodItemID:success.foodItemID}]})
           
          // console.log("success2 is",success2)

            //push into array
           cartRetriveArray.push(success2)


        }

    }

    res.send({message:cartRetriveArray})
   
    //console.log("Cart retrival array is",cartRetriveArray)
}))





cartApiObj.put("/updatefood/:username",errorhandler(async (req,res)=>{
    await Cart.updateOne({$and:[{username:req.params.username},{foodItemID:req.body.foodItemID}]},{quantity:req.body.quantity,Price:req.body.Price})
    let count=await Cart.find({username:req.body.username})
    res.send({message:"Updated successfully",userObj:count})
    //console.log(count)
   
}))




cartApiObj.post("/deletefood",errorhandler(async (req,res)=>{
    //console.log(req.body)
    let deleteCart= await Cart.deleteOne({$and:[{username:req.body.username},{foodItemID:req.body.foodItemID}]})
   //console.log("Deleted items",deleteCart)
   let cartArray=await Cart.find({username:req.body.username})
   //console.log("after deleting",cartArray)
   res.send({message:"Succesfully deleted",cartArray:cartArray})
}))


cartApiObj.get("/getcartsize/:username",errorhandler(async (req,res)=>{
    //let count=0;
    let usercart=await Cart.find({username:req.params.username})
    //console.log("user cart size",usercart)
    
    let userCartsize=usercart.length;
    //console.log(userCartsize)
    res.send({cartsize:userCartsize,usercart:usercart})
    let count= 0;

    for(let i of carsarray){
        count = count + i.quantity
    }
    //console.log("Cart count is",count)
    
    res.send({message:count})

}))

cartApiObj.get("/getcartcount/:username",errorhandler(async (req,res)=>{
    console.log("Cart count of",req.params.username)
    let success = await Cart.find({username:req.params.username})
   
    let carsarray=[]
    for(let i of success){
         let success1= await Food.findOne({$and:[{foodItemID:i.foodItemID},{status:true}]})
        
         if(success1!=null)
         {
             let success2= await Cart.findOne({$and:[{username:req.params.username},{foodItemID:i.foodItemID}]})
            
 
             // push into array
            carsarray.push(success2)
            //console.log("carsarray",carsarray)

         }
        
    }
    
    let count= 0

    for(let i of carsarray){
        count = count + i.quantity
    }
    console.log("Cart count is",count)
    
    res.send({message:count})
}))

module.exports=cartApiObj;

