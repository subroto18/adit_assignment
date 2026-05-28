import { useState } from "react";

import { taskService } from "@/api/services/task.service";

import { toast } from "@/utils/toast";

import { DASHBOARD_TEXT } from "../constants/dashboard.text";

export const useCreateTask = (onSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);
  const handleCreateTask = async (payload: {
    title: string;
    description?: string;
  }) => {
    try {
      setLoading(true);
      await taskService.createTask(payload);
      toast.success(DASHBOARD_TEXT.toast.createSuccess);
      onSuccess?.();
    } catch {
      toast.error(DASHBOARD_TEXT.toast.createError);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    handleCreateTask,
  };
};
