// features/dashboard/hooks/useUpdateTask.ts

import { useState } from "react";
import { taskService } from "@/api/services/task.service";
import { DASHBOARD_TEXT } from "../constants/dashboard.text";
import { toast } from "@/utils/toast";
import type { Task } from "../types/task.types";

export const useUpdateTask = (onSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);

  const handleToggleStatus = async (task: Task) => {
    try {
      setLoading(true);
      const nextStatus = task.status === "completed" ? "pending" : "completed";
      await taskService.updateTask(task.id, {
        status: nextStatus,
      });
      toast.success(DASHBOARD_TEXT.toast.updateSuccess);
      onSuccess?.();
    } catch {
      toast.error(DASHBOARD_TEXT.toast.updateError);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleToggleStatus,
  };
};
