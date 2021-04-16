const mongoose=require("mongoose")
const PaymentSchema=new mongoose.Schema({
    chname:{type:String,required:true},
    cnum:{type:String,required:true},
    mm:{type:String,required:true},
    yyyy:{type:String,required:true}
})
const Payment=mongoose.model("payment",PaymentSchema)
module.exports=Payment