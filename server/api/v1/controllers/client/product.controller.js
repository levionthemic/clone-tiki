const Product = require("../../models/product.model");
const ProductDetail = require("../../models/product-detail.model");
const TopDeal = require("../../models/topdeal.model");

const unidecode = require("unidecode");

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
      product: product,
    });
  } else {
    res.json({
      code: 400,
      message: "error",
    });
  }
};

// [GET] /api/v1/products/topdeal
module.exports.topdeal = async (req, res) => {
  const topdeals = await TopDeal.find({});

  res.json({
    code: 200,
    message: "Success",
    data: topdeals,
  });
};

// [GET] /api/v1/products/search
module.exports.search = async (req, res) => {
  const keyword = req.query.keyword;
  const slugKeyword = unidecode(keyword).trim().replace(/\s+/g, "-");

  const regexName = new RegExp(keyword, "i");
  const regexURLKey = new RegExp(slugKeyword, "i");

  const products = await Product.find({
    $or: [{ name: regexName }, { url_key: regexURLKey }],
  }).limit(40);

  if (products) {
    res.json({
      code: 200,
      message: "Success",
      data: products,
    });
  } else {
    res.json({
      code: 400,
      message: "Error",
    });
  }
};
