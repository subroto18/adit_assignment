import { useCallback, useEffect, useState } from "react";

import { taskService } from "@/api/services/task.service";

import { toast } from "@/utils/toast";

import type { Task, TaskStatus } from "../types/task.types";
import { DASHBOARD_TEXT } from "../constants/dashboard.text";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState<"all" | TaskStatus>("all");

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);

      const response = await taskService.getTasks(
        filter === "all" ? {} : { status: filter },
      );

      setTasks(response.data.tasks);
    } catch {
      toast.error(DASHBOARD_TEXT.toast.fetchError);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    filter,
    setFilter,
    refetchTasks: fetchTasks,
  };
};
