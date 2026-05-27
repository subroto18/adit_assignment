const MESSAGES = require("../constants/messages");
const { register, login } = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/responseHandler");

const createUser = asyncHandler(async (req, res) => {
  const user = await register(req.body);
  return sendResponse({
    res,
    statusCode: 201,
    message: MESSAGES.AUTH.USER_REGISTERED,
    data: user,
  });
});

const userLogin = asyncHandler(async (req, res) => {
  const user = await login(req.body);
  return sendResponse({
    res,
    statusCode: 200,
    message: MESSAGES.AUTH.USER_LOGEDIN,
    data: user,
  });
});

module.exports = {
  createUser,
  userLogin,
};
