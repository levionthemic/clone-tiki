const Category = require("../../models/category.model");

// [GET] /api/v1/
module.exports.index = (req, res) => {
  res.json({
    code: 200,
  });
};

// [GET] /api/v1/categories
module.exports.getCategories = async (req, res) => {
  const categories = await Category.find({}).select("icon_url text -_id");

  res.json({
    code: 200,
    message: "success",
    data: categories,
  });
};
