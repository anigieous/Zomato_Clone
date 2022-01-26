const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    name: String, required: true,
    image: [String],
    category: [String],
    restrauntId: String,
    price: Number,
});

module.exports = mongoose.model("Item", ItemSchema);