import dotenv from 'dotenv'
import mongoose from 'mongoose';

import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})

connectDB();



/* 
//method first: 

import express from "express";
const app = express();
(async()=>{
    try {
        await mongoose.coonect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()

*/