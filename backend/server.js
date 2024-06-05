const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")

const DataModel = require("./DataModel")
const UserModel = require('./models/UserModel');

const connectDB = require("./Database")
connectDB();


const app = express();
app.use(express.json({extended: false}));

const cors = require("cors");
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser())

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

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.json({status: false, message:"no token"});
        }
        const decoded = jwt.verify(token, process.env.KEY);
        next()
    } catch (err) {
        return res.json(err);
    }
}

app.get('/verify', verifyUser, (req, res) => {
    return res.json({status: true, message: "authorized" })
})

app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = "user";
    UserModel.create({name, email, password, role})
    .then(user => res.json(user))
    .catch(err => res.json(err))

})


app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.find({email: email})
    .then(user => {
       
        if (user) {
            if (user[0].password === password) {
                const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '1h'})
                res.cookie('token', token, {httpOnly: true, maxAge: 360000})
                res.json({status:"Success", role: user[0].role})
            } else {
                res.json("The password is incorrect")
            }
        } else { 
            res.json("No record existed")
        }
    })
 
})

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