 
import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../api/routes/user.route.js"
import authRouter from "../api/routes/auth.route.js"
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb  connected ✨")
}).catch((err)=>{
    console.log(err)
})

const app = express() 
app.listen(4000,()=>{
    console.log('is running ✨ ')
})
app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)