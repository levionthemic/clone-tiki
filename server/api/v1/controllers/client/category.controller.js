const Category = require("../../models/category.model");

// [GET] /api/v1/categories/:categoryId
module.exports.index = async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const categories = await Category.find({});

  const getListChildCategories = (categories) => {
    if (!categories) {
      return null;
    }
    for (const category of categories) {
      if (parseInt(category.id) == categoryId) {
        return Array(category.children);
      }
      const result = getListChildCategories(category.children);
      if (result) return result;
    }
  };

  const result = JSON.parse(
    JSON.stringify(getListChildCategories(categories))
  )[0];
  const data = result.map((item) => ({
    key: `${item.id}`,
    label: item.name,
    children: item.children.map((i) => ({ key: `${i.id}`, label: i.name })),
  }));

  res.json({
    code: 200,
    message: "Success",
    data: data,
  });
};
