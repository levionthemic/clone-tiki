const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: Number,
  sku: String,
  name: String,
  type: String,
  author_name: String,
  brand_name: String,
  short_description: String,
  price: Number,
  list_price: Number,
  discount_rate: Number,
  rating_average: Number,
  review_count: Number,
  order_count: Number,
  favourite_count: Number,
  thumbnail_url: String,
  has_ebook: Boolean,
  inventory_status: String,
  is_visible: Boolean,
  is_flower: Boolean,
  is_gift_card: Boolean,
  quantity_sold: Object,
  original_price: Number,
  shippable: Boolean,
  availability: Number,
  primary_category_path: String,
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;