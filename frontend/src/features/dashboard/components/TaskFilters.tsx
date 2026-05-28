import { Select } from "antd";
import { DASHBOARD_TEXT } from "../constants/dashboard.text";
type FilterType = "all" | "completed" | "pending";

type Props = {
  filter: FilterType;
  setFilter: (value: FilterType) => void;
};

const TaskFilters = ({ filter, setFilter }: Props) => {
  return (
    <div className="mb-6 flex justify-end">
      <Select
        value={filter}
        onChange={setFilter}
        className="w-48"
        options={[
          {
            label: DASHBOARD_TEXT.filters.all,
            value: "all",
          },

          {
            label: DASHBOARD_TEXT.filters.completed,
            value: "completed",
          },

          {
            label: DASHBOARD_TEXT.filters.pending,
            value: "pending",
          },
        ]}
      />
    </div>
  );
};

export default TaskFilters;
