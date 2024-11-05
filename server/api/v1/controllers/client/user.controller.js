const User = require("../../models/user.model");

// [GET] /api/v1/user/login
module.exports.login = async (req, res) => {
  const { phoneNumber } = req.body;

  const user = await User.findOne({
    phoneNumber: phoneNumber,
  });

  if (user) {
    res.json({
      code: 200,
      message: "Login Success",
      token: user.token,
    });
  } else {
    res.json({
      code: 400,
      message: "Login Failed",
    });
  }
};
