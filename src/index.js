const express = require('express');
const multer = require('multer');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(multer().any())
mongoose.connect("mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/group16Database?retryWrites=true&w=majority" ,{
    UseNewUrlParser: true
})
.then( () => console.log("mongoDb is connected"))
.catch((err) => console.log(err.message))
app.use('/' , route)
app.listen(process.env.PORT ||3000, function(){
    console.log("express app running on port "+(process.env.port||3000))
})