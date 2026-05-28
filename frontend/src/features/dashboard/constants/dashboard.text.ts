export const DASHBOARD_TEXT = {
  title: "Task Dashboard",
  subtitle: "Manage your daily tasks efficiently",
  createTask: "Create Task",
  filters: {
    all: "All",
    completed: "Completed",
    pending: "Pending",
  },

  table: {
    title: "Title",
    description: "Description",
    status: "Status",
    actions: "Actions",
    empty: "No tasks found",
  },
  modal: {
    title: "Create New Task",
    submit: "Create Task",
    taskTitle: "Task Title",
    taskDescription: "Task Description",
    titlePlaceholder: "Enter task title",
    descriptionPlaceholder: "Enter task description",
    titleRequired: "Please enter task title",
  },
} as const;
