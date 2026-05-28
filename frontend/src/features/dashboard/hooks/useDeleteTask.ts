import { useState } from "react";
import { taskService } from "@/api/services/task.service";
import { DASHBOARD_TEXT } from "../constants/dashboard.text";
import { toast } from "@/utils/toast";
export const useDeleteTask = (onSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteTask = async (taskId: string) => {
    try {
      setLoading(true);
      await taskService.deleteTask(taskId);
      toast.success(DASHBOARD_TEXT.toast.deleteSuccess);
      onSuccess?.();
    } catch {
      toast.error(DASHBOARD_TEXT.toast.deleteError);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleDeleteTask,
  };
};
