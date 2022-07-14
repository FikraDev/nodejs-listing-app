const express = require('express');
const listingroutes = require('./routes/listingroutes');
require('dotenv').config();


//initialize app
const app = express();

//setup view engine & views folder
app.set('view engine', 'ejs')
app.set('views', 'views')

//for static files
app.use(express.static('public'));
app.use(listingroutes); 

//read in .env data
PORT = process.env.PORT




//listen for requests
app.listen(PORT, ()=>{
    console.log("Listening on ....")
})