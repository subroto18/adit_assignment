export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  USER: {
    ME: "user/me",
  },

  TASK: {
    GET_ALL: "/tasks",
    CREATE: "/tasks",
  },
} as const;
