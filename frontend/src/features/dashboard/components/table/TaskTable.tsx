// table/TaskTable.tsx

import { Table } from "antd";

import { DASHBOARD_TEXT } from "../../constants/dashboard.text";
import type { Task } from "../../types/task.types";
import { getTaskTableColumns } from "./taskTable.columns";

type Props = {
  tasks: Task[];

  loading: boolean;
  onDelete: (id: string) => void;
  onToggleStatus: (task: Task) => void;
};

const TaskTable = ({ tasks, loading, onDelete, onToggleStatus }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Table<Task>
        rowKey="id"
        loading={loading}
        dataSource={tasks}
        pagination={false}
        className="w-full"
        locale={{
          emptyText: DASHBOARD_TEXT.table.empty,
        }}
        columns={getTaskTableColumns({
          onDelete,
          onToggleStatus,
        })}
      />
    </div>
  );
};

export default TaskTable;
