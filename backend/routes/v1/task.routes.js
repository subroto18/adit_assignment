const express = require("express");
const router = express.Router();
const { createTask, getTasks } = require("../../controllers/task.controller");
const { createTaskSchema } = require("../../validations/tasks.validation");
const validate = require("../../middleware/validate.middleware");
router.post("/", validate(createTaskSchema), createTask);
router.get("/", getTasks);
module.exports = router;
