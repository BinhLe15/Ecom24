const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./DataModel")
const connectDB = require("./Database")
connectDB();

const app = express();
app.use(express.json({extended: false}));

const cors = require("cors");
app.use(cors());

var multer = require('multer');

var fs = require('fs');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../src/uploads");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date. now() + "_"+ Math. round (Math.random() * 1e9);
        cb(null, uniqueSuffix + file.originalname);
    }
});
 
var upload = multer({ storage: storage });

app.get("/readfromserver", async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json({data});
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).send("Server error while read data")
    }
})

app.post("/writefromserver", upload.single("image"), async (req, res) => {
    try { 
        const title = req.body.title;
        const description = req.body.description;
        const content = req.body.content;
        const image = req.file.filename; 

        const newsData = new DataModel({title, description ,content, image});
        await newsData.save();
       
        res.json({message: "Data saved successfuly"})
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).send("Server error while saving data")
    } 
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})