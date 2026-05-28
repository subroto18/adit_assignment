import Tooltip from "@/components/ui/Tooltip";
import Tag from "@/components/ui/Tag";
import { DASHBOARD_TEXT } from "../../constants/dashboard.text";
import type { Task } from "../../types/task.types";
import TaskAction from "./TaskAction";

type Props = {
  onDelete: (id: string) => void;
  onToggleStatus: (task: Task) => void;
  loading: boolean;
};

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }
  return `${text.substring(0, limit)}...`;
};

const capitalizeText = (text: string) => {
  if (!text) {
    return "";
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getTaskTableColumns = ({
  onDelete,
  onToggleStatus,
  loading,
}: Props) => {
  return [
    {
      title: DASHBOARD_TEXT.table.title,
      dataIndex: "title",
      key: "title",
      width: "30%",

      render: (value: string) => {
        const formattedValue = capitalizeText(value);
        return (
          <Tooltip title={formattedValue}>
            <span className="font-medium text-slate-800">
              {truncateText(formattedValue, 35)}
            </span>
          </Tooltip>
        );
      },
    },

    {
      title: DASHBOARD_TEXT.table.description,
      dataIndex: "description",
      key: "description",
      width: "35%",
      render: (value: string) => {
        if (!value) {
          return "-";
        }
        const formattedValue = capitalizeText(value);
        return (
          <Tooltip title={formattedValue}>
            <span>{truncateText(formattedValue, 60)}</span>
          </Tooltip>
        );
      },
    },

    {
      title: DASHBOARD_TEXT.table.status,
      key: "status",
      width: "15%",
      render: (_: unknown, task: Task) => (
        <Tag color={task.status === "completed" ? "green" : "orange"}>
          {task.status.toUpperCase()}
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
          loading={loading}
        />
      ),
    },
  ];
};
