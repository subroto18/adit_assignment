const jwt = require("jsonwebtoken");
const AUTH_CONFIG = require("../config/auth.config");

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    AUTH_CONFIG.JWT_SECRET,
    {
      expiresIn: AUTH_CONFIG.JWT_EXPIRES_IN,
    },
  );
};

module.exports = {
  generateAccessToken,
};
