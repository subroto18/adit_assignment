const AppError = require("../utils/AppError");

const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    console.log(result);
    if (!result.success) {
      return next(
        new AppError({
          code: "VALIDATION_ERROR",
          errors: result.error.flatten().fieldErrors,
        }),
      );
    }
    next();
  };
};

module.exports = validate;
