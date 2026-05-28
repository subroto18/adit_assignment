// table/taskTable.columns.tsx

import { Tag } from "antd";
import { DASHBOARD_TEXT } from "../../constants/dashboard.text";
import type { Task } from "../../types/task.types";
import TaskAction from "./TaskAction";

type Props = {
  onDelete: (id: string) => void;
  onToggleStatus: (task: Task) => void;
};

export const getTaskTableColumns = ({ onDelete, onToggleStatus }: Props) => {
  return [
    {
      title: DASHBOARD_TEXT.table.title,
      dataIndex: "title",
      key: "title",
      width: "30%",
      render: (value: string) => (
        <span className="font-medium text-slate-800">{value}</span>
      ),
    },

    {
      title: DASHBOARD_TEXT.table.description,
      dataIndex: "description",
      key: "description",
      width: "35%",
      render: (value: string) => value || "-",
    },

    {
      title: DASHBOARD_TEXT.table.status,
      key: "status",
      width: "15%",
      render: (_: unknown, task: Task) => (
        <Tag color={task.status === "completed" ? "green" : "orange"}>
          {task.status}
        </Tag>
      ),
    },

    {
      title: DASHBOARD_TEXT.table.actions,
      key: "actions",
      width: "20%",
      align: "center" as const,
      render: (_: unknown, task: Task) => (
        <TaskAction
          task={task}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ),
    },
  ];
};
