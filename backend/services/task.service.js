const { TASK_STATUS } = require("../constants/enums");
const Task = require("../model/task.model");
const AppError = require("../utils/AppError");

const createTask = async (payload, userId) => {
  const { title, description } = payload || {};
  const task = await Task.create({
    title,
    description,
    user: userId,
  });

  return {
    id: task._id,
    title: task.title,
    description: task.description,
    status: task.status,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};

const getTasks = async (userId, queryParams) => {
  const { status, page = 1, limit = 10 } = queryParams || {};
  const query = {
    user: userId,
  };

  if (
    status &&
    status !== "all" &&
    Object.values(TASK_STATUS).includes(status)
  ) {
    query.status = status;
  }

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const select = "title description status createdAt updatedAt";

  const [tasks, totalTasks] = await Promise.all([
    Task.find(query, select)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber)
      .lean(),
    Task.countDocuments(query),
  ]);

  return {
    tasks: tasks.map(({ _id, ...task }) => ({
      id: _id,
      ...task,
    })),
    pagination: {
      total: totalTasks,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(totalTasks / limitNumber),
    },
  };
};

const deleteTask = async (taskId, userId) => {
  const deletedTask = await Task.findOneAndDelete({
    _id: taskId,
    user: userId,
  });
  if (!deletedTask) {
    throw new AppError({
      code: "TASK_NOT_FOUND",
    });
  }
  return true;
};

const updateTask = async (taskId, userId, payload) => {
  const select = "title description status createdAt updatedAt";
  const updatedTask = await Task.findOneAndUpdate(
    {
      _id: taskId,
      user: userId,
    },
    payload,
    {
      new: true,
      runValidators: true,
      projection: select,
    },
  ).lean();

  if (!updatedTask) {
    throw new AppError({
      code: "TASK_NOT_FOUND",
    });
  }
  const { _id, ...task } = updatedTask;
  return {
    id: _id,
    ...task,
  };
};

module.exports = { createTask, getTasks, deleteTask, updateTask };
