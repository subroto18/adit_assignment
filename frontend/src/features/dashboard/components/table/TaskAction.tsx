// table/TaskAction.tsx

import { Space } from "antd";

import Button from "@/components/ui/Button";

import type { Task } from "../../types/task.types";

type Props = {
  task: Task;

  onDelete: (id: string) => void;

  onToggleStatus: (task: Task) => void;
};

const TaskAction = ({ task, onDelete, onToggleStatus }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <Space wrap size="small">
        <Button size="sm" onClick={() => onToggleStatus(task)}>
          {task.status === "completed" ? "Pending" : "Complete"}
        </Button>

        <Button danger size="sm" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </Space>
    </div>
  );
};

export default TaskAction;
