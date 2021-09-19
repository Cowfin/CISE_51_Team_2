require("dotenv").config({ path: "./config.env" });
const express = require("express");
const dbo = require("./db/conn");
const cors = require("cors");
const path = require("path")

const articles = require('./routes/record')

const app = express();

// connect database
dbo();

// cors
app.use(cors({ origin: true, credentials: true}));

// init middleware
app.use(express.json({ extended: false}));

// use routes
app.use('/record', articles)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,'/client/build')))

  app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname,'client','build','index.html'))
  })
} else {
  app.get('/',(req,res) =>{
      res.send("Api running");
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));