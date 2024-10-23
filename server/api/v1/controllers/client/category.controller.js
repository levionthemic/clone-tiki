const Category = require("../../models/category.model");

// [GET] /api/v1/categories/:categoryId
module.exports.index = async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const categories = await Category.find({});

  const getListChildCategories = (categories) => {
    for (const category of categories) {
      if (parseInt(category.id) == categoryId) {
        return category.children;
      }
    }
  }

  const result = [];
}