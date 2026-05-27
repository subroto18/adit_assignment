const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({
    success: true,
    status: "success",
    message,
    data,
  });
};

module.exports = sendResponse;
