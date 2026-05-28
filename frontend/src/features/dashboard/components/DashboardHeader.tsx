import Button from "@/components/ui/Button";

import { DASHBOARD_TEXT } from "../constants/dashboard.text";

type Props = {
  onCreateTask: () => void;
};

const DashboardHeader = ({ onCreateTask }: Props) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {DASHBOARD_TEXT.title}
        </h1>

        <p className="mt-2 text-sm text-slate-500">{DASHBOARD_TEXT.subtitle}</p>
      </div>

      <Button
        size="md"
        onClick={onCreateTask}
        className="bg-cyan-500 text-white hover:bg-cyan-400"
      >
        {DASHBOARD_TEXT.createTask}
      </Button>
    </div>
  );
};

export default DashboardHeader;
