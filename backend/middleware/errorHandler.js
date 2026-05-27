const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isProduction = process.env.NODE_ENV === "production";

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    status: "error",
    message:
      isProduction && statusCode === 500
        ? "Internal Server Error"
        : err.message || "Internal Server Error",
    code: err.code || "INTERNAL_ERROR",
    statusCode,
    data: null,
  });
};

module.exports = errorHandler;
