import { api } from "../axios";

import { API_ENDPOINTS } from "../endpoints";

type CreateTaskPayload = {
  title: string;
  description?: string;
};

type UpdateTaskPayload = {
  title?: string;
  description?: string;
  status?: "pending" | "completed";
};

export const taskService = {
  getTasks: async (params?: { status?: string }) => {
    const response = await api.get(API_ENDPOINTS.TASK.ROOT, {
      params,
    });
    return response.data;
  },

  createTask: async (payload: CreateTaskPayload) => {
    const response = await api.post(API_ENDPOINTS.TASK.ROOT, payload);
    return response.data;
  },

  updateTask: async (taskId: string, payload: UpdateTaskPayload) => {
    const response = await api.patch(
      `${API_ENDPOINTS.TASK.ROOT}/${taskId}`,
      payload,
    );
    return response.data;
  },

  deleteTask: async (taskId: string) => {
    const response = await api.delete(`${API_ENDPOINTS.TASK.ROOT}/${taskId}`);
    return response.data;
  },
};
