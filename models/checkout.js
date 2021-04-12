const mongoose=require("mongoose")
const PaymentSchema=new mongoose.Schema({
    chname:String,
    cnum:String,
    mm:String,
    yyyy:String
})
const Payment=mongoose.model("payment",PaymentSchema)
module.exports=Payment