const mongoose = require("mongoose");

const topDealSchema = new mongoose.Schema({
  discount_rate: Number,
  name: String,
  original_price: Number,
  price: Number,
  rating_average: Number,
  thumbnail_url: String
});

const TopDeal = new mongoose.model("TopDeal", topDealSchema, "content-top-deals");

module.exports = TopDeal;
