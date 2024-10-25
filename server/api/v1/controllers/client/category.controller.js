const Category = require("../../models/category.model");

// [GET] /api/v1/categories/:categoryId
module.exports.index = async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const categories = await Category.find({});
  let title = "";
  let breadcrumb = [{
    title: "Trang chủ"
  }];

  const getListChildCategories = (categories) => {
    if (!categories) {
      return null;
    }
    for (const category of categories) {
      breadcrumb.push({
        title: category.name || category.text,
      });
      if (parseInt(category.id) == categoryId) {
        title = category.text || category.name;
        return Array(category.children);
      }
      const result = getListChildCategories(category.children);
      if (result) return result;
      breadcrumb.pop();
    }
  };

  const result = JSON.parse(
    JSON.stringify(getListChildCategories(categories))
  )[0];

  let data = null;
  if (result) {
    data = result.map((item) => ({
      key: `${item.id}`,
      label: item.name,
      thumbnail: item.thumbnail_url,
      children: item.children
        ? item.children.map((i) => ({ key: `${i.id}`, label: i.name }))
        : null,
    }));
  }
  

  res.json({
    code: 200,
    message: "Success",
    breadcrumb: breadcrumb,
    data: {
      title: title,
      data: data,
    },
  });
};
