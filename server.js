
//express
const exp=require("express")

const app=exp()
//dotenv
require("dotenv").config()
const port=process.env.PORT||8080

//path
const path=require("path")

//connect app
app.use(exp.static(path.join(__dirname,'dist/ClickToEat')))

//import userapi
const userApiObj=require("./APIS/userApi")
const adminApiObj=require("./APIS/adminApi")
const foodApiObj=require("./APIS/foodApi")
const cartApiObj=require("./APIS/cartApi")
const addressApiObj=require("./APIS/addressApi")
const paymentApiObj=require("./APIS/checkoutApi")


app.use("/user",userApiObj)
app.use("/admin",adminApiObj)
app.use("/food",foodApiObj)
app.use("/cart",cartApiObj)
app.use("/address",addressApiObj)
app.use("/payment",paymentApiObj)

//mongoose
const mongoose=require("mongoose")
const Address = require("./models/address")

//connect to db
mongoose.connect(process.env.DBURL,{useNewUrlParser:true, useUnifiedTopology:true});

const database=mongoose.connection;

database.once('open',()=>{
    console.log("connected to Database")
})

database.on('error',()=>{
    console.log("Error in connecting database")
})

//middleware to deal with invalid paths
app.use((req,res,next)=>{res.send({message:req.url+" is not a valid path"})
})   

//error handler middleware
app.use((err,req,res,next)=>{res.send({message:err.message})})  

//port number
app.listen(port,()=>{
    console.log(`server started on ${port}`)
})