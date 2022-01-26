const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name: String, required: true,
    images: [String],
    items: [String],
    restrauntId: String,
});

module.exports = mongoose.model("Category", CategorySchema);