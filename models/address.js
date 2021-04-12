const mongoose=require("mongoose")
const AddressSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    address:String,
    flatnumber:String,
    city:String,
    country:String,
    pincode:String
})
const Address=mongoose.model("address",AddressSchema)
module.exports=Address