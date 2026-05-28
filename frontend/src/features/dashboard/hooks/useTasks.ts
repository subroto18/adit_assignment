import { useCallback, useEffect, useState } from "react";

import { taskService } from "@/api/services/task.service";

import { toast } from "@/utils/toast";

import type { Task, TaskStatus } from "../types/task.types";

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
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleCreateTask = async (payload: {
    title: string;

    description?: string;
  }) => {
    try {
      await taskService.createTask(payload);
      toast.success("Task created successfully");
      fetchTasks();
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await taskService.deleteTask(taskId);

      toast.success("Task deleted successfully");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const handleToggleStatus = async (task: Task) => {
    try {
      const nextStatus = task.status === "completed" ? "pending" : "completed";

      await taskService.updateTask(task.id, {
        status: nextStatus,
      });

      toast.success("Task updated successfully");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  return {
    tasks,
    loading,
    filter,
    setFilter,
    handleCreateTask,
    handleDeleteTask,
    handleToggleStatus,
  };
};
