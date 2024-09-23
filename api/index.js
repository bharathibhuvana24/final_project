import express from "express"
import mongoose from "mongoose";
import userRouter from "./Router/user.router.js";
import authRouter from "./Router/auth.router.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());
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


app.listen(3000,()=>
{
    console.log("server is running in the port 3000");
});