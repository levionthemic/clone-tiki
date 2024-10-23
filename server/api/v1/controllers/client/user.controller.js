
// [GET] /api/v1/user/login
module.exports.login = async (req, res) => {
  console.log(req.body);
  res.json({
    code: 200,
  })
}