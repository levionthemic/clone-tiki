const Product = require("../../models/product.model");
const ProductDetail = require("../../models/product-detail.model");

// [GET] /api/v1/products
module.exports.index = async (req, res) => {
  const categoryId = req.query.categoryId;

  let objectFind = {};

  const regex = new RegExp(`/${categoryId}`);
  objectFind.primary_category_path = regex;

  const productList = await Product.find(objectFind)
    .limit(100)
    .select(
      "name brand_name price original_price rating_average discount_rate thumbnail_url quantity_sold primary_category_path"
    );

  res.json({
    code: 200,
    productList: productList,
  });
};

// [GET] /api/v1/products/detail/:productId
module.exports.detail = async (req, res) => {
  const productId = req.params.productId;

  const product = await ProductDetail.findOne({
    _id: productId,
  });
  
  if (product) {
    res.json({
      code: 200,
      message: "success",
      product: product
    });
  } else {
    res.json({
      code: 400,
      message: "error"
    })
  }
  
};
