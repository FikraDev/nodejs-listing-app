const express = require("express");
const mongoose = require("mongoose");
const listingroutes = require("./routes/listingroutes");
require("dotenv").config();

//initialize app
const app = express();

//for static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
extended:true
}));
app.use(listingroutes); //must always be placed last

//read in .env data
PORT = process.env.PORT;
DBCREDS = process.env.DB_CREDS

//db connection
const dbUrl = DBCREDS 

mongoose.connect(dbUrl, { useNewUrlParser:true, useUnifiedTopology: true })
.then((result) => app.listen(PORT))
.catch((err) => console.log(err));

//setup view engine & views folder
app.set("view engine", "ejs");
app.set("views", "views");







