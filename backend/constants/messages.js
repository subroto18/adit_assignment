const MESSAGES = {
  AUTH: {
    USER_REGISTERED: "User registered successfully",
    USER_LOGEDIN: "Login successful",
    INVALID_CREDENTIALS: "Invalid email or password",
    USER_ALREADY_EXISTS: "User already exists",
  },

  GENERAL: {
    INTERNAL_ERROR: "Internal Server Error",
    ROUTE_NOT_FOUND: "Route not found",
  },

  TASK: {
    CREATE_SUCCESS: "Task created successfully",
    UPDATE_SUCCESS: "Task updated successfully",
    DELETE_SUCCESS: "Task deleted successfully",
    FETCH_SUCCESS: "Tasks fetched successfully",
    FETCH_ONE_SUCCESS: "Task fetched successfully",
  },
};

module.exports = MESSAGES;
