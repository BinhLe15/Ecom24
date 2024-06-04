const { Schema } = require("@mui/icons-material");
const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    }
});
module.exports = mongoose.model("DataModel", DataSchema);