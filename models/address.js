const mongoose=require("mongoose")
const AddressSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    address:{type:String,required:true},
    flatnumber:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true},
    pincode:{type:String,required:true}
})
const Address=mongoose.model("address",AddressSchema)
module.exports=Address