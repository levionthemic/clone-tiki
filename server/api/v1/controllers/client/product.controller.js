const Product = require("../../models/product.model");

// [GET] /api/v1/products
module.exports.index = async (req, res) => {
  const categoryId = req.query.categoryId;

  const regex = new RegExp(`/${categoryId}`);

  const productList = await Product.find({
    primary_category_path: regex,
  })
    .limit(100)
    .select(
      "name brand_name price original_price rating_average discount_rate thumbnail_url quantity_sold primary_category_path"
    );

  res.json({
    code: 200,
    productList: productList,
  });
};
