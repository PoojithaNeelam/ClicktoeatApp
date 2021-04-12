const mongoose=require("mongoose")
const CartSchema=new mongoose.Schema({
        username : String,
        restname : String,
        RestaurentID:String,
        foodtype:String,
        fooditemname:String,
        foodItemID:String,
        Price:Number,
        status:Boolean,
        photo:String,
        quantity:Number
})
const Cart=mongoose.model("cart",CartSchema)
module.exports=Cart;
 