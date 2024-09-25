import express from "express"
import mongoose from "mongoose";
import userRouter from "./Router/user.router.js";
import authRouter from "./Router/auth.router.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());


const mongodb_connection_string = process.env.MONGO;

mongoose.connect(mongodb_connection_string).then(() =>
    {
        console.log("connected to MongoDB")
    }).catch((err) => 
        {console.log("Error:" +err)});
    


    app.get('/',(req,res)=>
{
    res.status(200).send("App is working!!!");
})

    app.use("/api/user",userRouter);
    app.use("/api/auth", authRouter);
    app.use((err,req,res,next)=>
    { 
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        return res.status(statusCode).json({
            success:false,
            message,
            statusCode
        })
    })



app.listen(3000,()=>
{
    console.log("server is running in the port 3000");
});