const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');


//connect to mongdb
mongoose.connect("mongodb://localhost:27017/emp",{useNewUrlParser:true,useUnifiedTopology: true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(3000,()=>{
            console.log("server started..!!");
        })
    }
);