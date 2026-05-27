// const sendResponse = (res, statusCode, message, data = null) => {
//   res.status(statusCode).json({
//     success: true,
//     status: "success",
//     message,
//     data,
//   });
// };

const sendResponse = ({
  res,
  statusCode = 200,
  message = "Success",
  data = null,
}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

module.exports = sendResponse;
