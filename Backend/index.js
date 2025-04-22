const express = require("express");
require('dotenv').config();
const app = express();
const mainPort = process.env.PORT;
const Name = process.env.NAME;
app.listen(mainPort,()=>{
    console.log("Server is Running On = "+mainPort);
})

app.get("/",(req,res)=>{
    res.send(`${Name}`);
})