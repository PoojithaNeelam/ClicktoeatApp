const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    mobilenumber:Number
})
const User=mongoose.model("user",UserSchema)
module.exports=User