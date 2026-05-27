const { default: User } = require("../model/user.model");
const AppError = require("../utils/AppError");

const register = async (payload) => {
  const { name, email, password } = payload || {};

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError({
      code: "USER_ALREADY_EXISTS",
    });
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};
module.exports = {
  register,
};
