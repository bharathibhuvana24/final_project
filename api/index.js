import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO).then(() =>
    {
        console.log("connected to MongoDB")
    }).catch((err) => 
        {console.log("Error:" +err)});
    


    app.get('/',(req,res)=>
{
    res.status(200).send("App is working")
    
})

app.listen(3000,()=>
{
    console.log("server is running in the port 3000");
});