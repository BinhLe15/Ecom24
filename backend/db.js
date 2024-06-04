const mongoose = require('mongoose')
require('.env').config();

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URL, {
    dbName: DB_NAME
}).then(
    () => {
        console.log('Connected to database');
    }
).catch((error) => {
    console.log('Error connecting to database ' + err);
}) 