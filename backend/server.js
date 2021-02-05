const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//so we have environment variables in .env files...?
require('dotenv').config();

//create express serer
const app = express();
const port = process.env.PORT || 5000;

//cors middle layer
app.use(cors());
//for parsing json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully")
});


//`starts` server
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
});