//import mini express
/*const exp=require("express")
const cartApiObj=exp.Router()
 
const errorHandler = require("express-async-handler")
 
//import module
const Cart=require("../models/cart")
 
cartApiObj.use(exp.json())

require("dotenv").config()
//import middleware
//const validateToken = require("./middlewares/verifytoken")
 
//add to cart
cartApiObj.post("/addtocart",errorHandler(async (req,res)=>{​​​​​​​​
//search for food in db
let cartFromDb=await Cart.findOne({​​​​​​​​$and:[{​​​​​​​​username:req.body.username}​​​​​​​​,{​​​​​​​​restname:req.body.restname}​​​​​​​​]}​​​​​​​​)
//if food item is already existed
if(cartFromDb==null){​​​​​​​​
let newFoodObj=new Cart({​​​​​​​​
username:req.body.username,
restname:req.body.restname,
RestaurentID:req.body.RestaurentID,
foodtype:req.body.foodtype,
fooditemname:req.body.fooditemname,
Price:req.body.Price,
status:req.body.status,
photo:req.body.photo
        }​​​​​​​​)
await newFoodObj.save()
res.send({​​​​​​​​message:"food item added to cart"}​​​​​​​​)
    }​​​​​​​​
//if food doesn't exists in the cart
else{​​​​​​​​
res.send({​​​​​​​​message:"food already exists in cart"}​​​​​​​​)
    }​​​​​​​​
 
}​​​​​​​​))
 
//get food items from cart
cartApiObj.get("/getfooditems/:username",errorHandler(async(req,res)=>{​​​​​​​​
let foodFormCart=awaitCart.find({​​​​​​​​username:req.params.username}​​​​​​​​)
 
res.send({​​​​​​​​message:foodFormCart}​​​​​​​​)
}​​​​​​​​))
//delete food item
cartApiObj.post("/deletefood",errorHandler(async(req,res)=>{​​​​​​​​
let result = awaitCart.deleteOne({​​​​​​​​$and:[{​​​​​​​​username:req.body.username}​​​​​​​​,{​​​​​​​​restname:req.body.restname}​​​​​​​​]}​​​​​​​​)

res.send({​​​​​​​​message:"deleted successfully"}​​​​​​​​)
}​​​​​​​​))



//export cartApi
module.exports=cartApiObj;*/

const exp=require("express")
const cartApiObj=exp.Router()

const errorhandler=require("express-async-handler")

//import module
const Cart=require("../models/cart")
const Food=require("../models/food")

cartApiObj.use(exp.json())
require("dotenv").config()

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


cartApiObj.get("/getcartitems/:username",errorhandler(async(req,res)=>
{
    let cartRetriveArray=[];
    console.log(req.params.username)
    let cartObj=await Cart.find({username:req.params.username})
    
   
    for(i=0;i<cartObj.length;i++)
    {
        console.log(cartObj[i])
        let success = await Food.findOne({$and:[{foodItemID:cartObj[i].foodItemID},{status:true}]})
        console.log("Admin cart delete is",success)
        if(success!=null)
        {
            let success2=await Cart.findOne({$and:[{username:req.params.username},{foodItemID:success.foodItemID}]})
           
           console.log("success2 is",success2)

            //push into array
           cartRetriveArray.push(success2)


        }

    }

    res.send({message:cartRetriveArray})
   
    console.log("Cart retrival array is",cartRetriveArray)
}))




/*cartApiObj.put("/updatefood",errorhandler(async (req,res)=>{
    
    console.log("cartapi ",req.body)
    let count=await Cart.updateOne({username:req.body.username},{Price:req.body.Price},{quantity:req.body.quantity})
    console.log("count is",count)
    

   
}))*/

cartApiObj.put("/updatefood/:username",errorhandler(async (req,res)=>{
    let count = await Cart.updateOne({$and:[{username:req.params.username},{foodItemID:req.body.foodItemID}]},{quantity:req.body.quantity,Price:req.body.Price})
    /*let success = await Cart.find({username:req.params.username})
    console.log("success is",success)
    res.send({message:"updated successfully",a:success})*/
    console.log(count)
}))




cartApiObj.post("/deletefood",errorhandler(async (req,res)=>{
    console.log(req.body)
    let deleteCart= await Cart.deleteOne({$and:[{username:req.body.username},{foodItemID:req.body.foodItemID}]})
   console.log("Deleted items",deleteCart)
   let cartArray=await Cart.find({username:req.body.username})
   console.log("after deleting",cartArray)
   res.send({message:"Succesfully deleted",cartArray:cartArray})
}))


cartApiObj.get("/getcartsize/:username",errorhandler(async (req,res)=>{
    let count=0;
    let usercart=await Cart.find({username:req.params.username})
    console.log("user cart size",usercart)
    for (let x of usercart) {
        count += x.quantity;
      }
      res.send({ message: count })
    /*let userCartsize=usercart.length;
    console.log(userCartsize)
    res.send({cartsize:userCartsize,usercart:usercart})*/

}))

module.exports=cartApiObj;

