const mongoose=require("mongoose")
const FoodSchema=new mongoose.Schema({
        restname:{type:String,required:true},
        RestaurentID:{type:String,required:true},
        foodtype:{type:String,required:true},
        fooditemname:{type:String,required:true},
        foodItemID:{type:String,required:true},
        Price:{type:Number,required:true},
        status:{type:Boolean,required:true},
        photo:{type:String,required:true}
})
const Food=mongoose.model("food",FoodSchema)
module.exports=Food