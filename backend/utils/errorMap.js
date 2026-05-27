module.exports = {
  MISSING_FIELDS: {
    message: "All fields (name, email, phone) are required",
    statusCode: 400,
  },
  INVALID_EMAIL: {
    message: "Invalid email format",
    statusCode: 400,
  },
  INVALID_PHONE: {
    message: "Phone must be 10 digits",
    statusCode: 400,
  },
  CUSTOMER_NOT_FOUND: {
    message: "Cutomer Id is not found",
    statusCode: 400,
  },
  ROUTE_NOT_FOUND: {
    message: "Route not found",
    statusCode: 404,
  },
};
