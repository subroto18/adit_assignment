import { useState } from "react";
import Container from "@/components/common/Container";
import DashboardHeader from "../components/DashboardHeader";
import TaskFilters from "../components/TaskFilters";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskTable from "../components/table/TaskTable";
import { useTasks } from "../hooks/useTasks";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    tasks,
    loading,
    filter,
    setFilter,
    handleCreateTask,
    handleDeleteTask,
    handleToggleStatus,
  } = useTasks();

  return (
    <Container>
      <div className="py-6">
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
          loading={loading}
        />
      </div>
    </Container>
  );
};

export default DashboardPage;
