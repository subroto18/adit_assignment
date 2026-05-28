export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  USER: {
    ME: "user/me",
  },

  TASK: {
    ROOT: "/tasks",
  },
} as const;
