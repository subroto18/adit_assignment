const errorMap = require("./errorMap");
class AppError extends Error {
  constructor(code, customMessage) {
    const err = errorMap[code];
    if (!err) {
      super(customMessage || "Unknown error");
      this.statusCode = 500;
      this.status = "error";
      this.code = "INTERNAL_ERROR";
      return;
    }
    super(customMessage || err.message);
    this.statusCode = err.statusCode || 500;
    this.status = "error";
    this.code = code;
  }
}
module.exports = AppError;
