require("dotenv").config({ path: "./config.env" });
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const records = require('./routes/api/record');
const submissionqueue = require('./routes/api/submissionqueue');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/record', records);
app.use('/api/submissionqueue', submissionqueue);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
    });
} else {
    app.get("/", (req,res) =>{
        res.send("Api running");
    });
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));