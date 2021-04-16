const mongoose=require("mongoose")
const CartSchema=new mongoose.Schema({
        username : {type:String,required:true},
        restname : {type:String,required:true},
        RestaurentID:{type:String,required:true},
        foodtype:{type:String,required:true},
        fooditemname:{type:String,required:true},
        foodItemID:{type:String,required:true},
        Price:{type:Number,required:true},
        status:{type:Boolean,required:true},
        photo:{type:String,required:true},
        quantity:{type:Number,required:true}
})
const Cart=mongoose.model("cart",CartSchema)
module.exports=Cart;
 