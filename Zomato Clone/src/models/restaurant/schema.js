const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  status: { type: Boolean, default: false },
  phone: {type: Number,required: true},
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);