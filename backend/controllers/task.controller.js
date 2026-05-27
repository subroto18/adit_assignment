const asyncHandler = require("../utils/asyncHandler");
const taskService = require("../services/task.service");
const { TASK } = require("../constants/messages");
const sendResponse = require("../utils/responseHandler");

const createTask = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(req.body, req.user._id);
  return sendResponse({
    res,
    statusCode: 201,
    message: TASK.CREATE_SUCCESS,
    data: task,
  });
});

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getTasks(req.user._id, req.query);

  return sendResponse({
    res,
    statusCode: 200,
    message: TASK.FETCH_SUCCESS,
    data: tasks,
  });
});

const deleteTask = asyncHandler(async (req, res) => {
  await taskService.deleteTask(req.params.taskId, req.user._id);
  return sendResponse({
    res,
    statusCode: 200,
    message: TASK.DELETE_SUCCESS,
  });
});

const updateTask = asyncHandler(async (req, res) => {
  const updatedTask = await taskService.updateTask(
    req.params.taskId,
    req.user._id,
    req.body,
  );

  return sendResponse({
    res,
    statusCode: 200,
    message: TASK.UPDATE_SUCCESS,
    data: updatedTask,
  });
});

module.exports = { createTask, getTasks, deleteTask, updateTask };
