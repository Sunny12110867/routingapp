import dotenv from 'dotenv';
dotenv.config();

import express from 'express';


const app=express();

app.get('/',(req,res)=>{
    res.send("this is hoem page");
});

app.get('/about',(req,res)=>{
    res.send("this is about page");
})

app.get('/about/sun',(req,res)=>{
    res.send("hello this is sun page0");
})

app.listen(process.env.PORT,()=>{
    console.log("this is port and this is working ");
});