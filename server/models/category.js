const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema =  new Schema ({
    name: {
        type: String,
        requried: true,
    }
});

const Category =  mongoose.model("Category", categorySchema);

module.exports = Category;



