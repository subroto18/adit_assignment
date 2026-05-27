const errorHandler = (err, req, res, next) => {
  console.log(err);

  return res.status(err.statusCode || 500).json({
    success: false,
    code: err.code || "INTERNAL_ERROR",
    message: err.message || "Internal Server Error",
    errors: err.errors || null,
  });
};

module.exports = errorHandler;
