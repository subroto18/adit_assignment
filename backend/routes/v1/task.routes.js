const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../../controllers/task.controller");
const {
  createTaskSchema,
  updateTaskSchema,
} = require("../../validations/tasks.validation");
const validate = require("../../middleware/validate.middleware");
router.post("/", validate(createTaskSchema), createTask);
router.get("/", getTasks);
router.delete("/:taskId", deleteTask);
router.patch("/:taskId", validate(updateTaskSchema), updateTask);

module.exports = router;
