const mongoose=require("mongoose")
const FoodSchema=new mongoose.Schema({
        restname:String,
        RestaurentID:String,
        foodtype:String,
        fooditemname:String,
        foodItemID:String,
        Price:Number,
        status:Boolean,
        photo:String
})
const Food=mongoose.model("food",FoodSchema)
module.exports=Food