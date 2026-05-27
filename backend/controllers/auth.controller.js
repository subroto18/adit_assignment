const MESSAGES = require("../constants/messages");
const { register } = require("../services/auth.service");
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

module.exports = {
  createUser,
};
