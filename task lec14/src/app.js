/*const mongoose =require("mongoose")
mongoose. connect ('mongoodb://127.0.0.1:27017/lec-10')
const Car =mongoose.model('Car',{type:String})
const Car1= new car({type:"mercedes"})
Car1.save()
.then(()=>console.log("car added"))



const express=require('express')
const app=express()
const port =process.env.PORT ||3000
app.get('/',(req,res)=>{
    res.send("Merna")
})
require('./db/mongoose')
app.use(express.json())
const userRouter = require("./routers/user")

app.use(userRouter)


app.listen( port , () => {console.log("all Done ")})*/








    const express = require ('express')

    const app = express()

    const port = process.env.PORT || 3000


   require('./db/mongoose')

  
   
   app.use(express.json())

   const userRouter = require("./routers/user")

   app.use(userRouter)


   app.listen( port , () => {console.log("All Done Successfully")})