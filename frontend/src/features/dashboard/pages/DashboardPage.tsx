// features/dashboard/pages/DashboardPage.tsx

import { useState } from "react";

import Container from "@/components/common/Container";
import DashboardHeader from "../components/DashboardHeader";
import TaskFilters from "../components/TaskFilters";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskTable from "../components/table/TaskTable";
import { useTasks } from "../hooks/useTasks";
import { useCreateTask } from "../hooks/useCreateTask";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { useUpdateTask } from "../hooks/useUpdateTask";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { tasks, loading, filter, setFilter, refetchTasks } = useTasks();

  const { loading: createTaskLoading, handleCreateTask } =
    useCreateTask(refetchTasks);
  const { handleDeleteTask } = useDeleteTask(refetchTasks);
  const { handleToggleStatus } = useUpdateTask(refetchTasks);

  return (
    <Container>
      <div className="py-8">
        <DashboardHeader onCreateTask={() => setIsModalOpen(true)} />
        <TaskFilters filter={filter} setFilter={setFilter} />

        <TaskTable
          tasks={tasks}
          loading={loading}
          onDelete={handleDeleteTask}
          onToggleStatus={handleToggleStatus}
        />

        <CreateTaskModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateTask}
          loading={createTaskLoading}
        />
      </div>
    </Container>
  );
};

export default DashboardPage;
