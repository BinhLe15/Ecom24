require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URL

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log("Mongodb error: ", error.message);
    }
}

module.exports = connectDB