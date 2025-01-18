// const express = require('express');
import express from 'express';
import { connectDB } from './config/db.js';
import core from "cors"
import router from './routes/foodRoutes.js';
import useRouter from './routes/userRoutes.js';
import dotenv from'dotenv';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRout.js';
// const core = require("cors");
// const  connectDB  = require('./config/db.js'); 
// this is es5
dotenv.config();
const app = express();
// middleware
app.use(express.json());
app.use(core())

connectDB();

// routes 
app.use("/api/food",router);
app.use("/images",express.static("upload"));

//  fetch data add data to order
app.use("/api/cart",cartRouter)

// // user routes
app.use("/api/user",useRouter)

app.use("/api/order",orderRouter)


const PORT=4000;
app.get("/",(req, res) => {
    res.send('Hello Wo  ld!');
})


//payment interface
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

