const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const taskRoutes = require("./task.routes");
const authMiddleware = require("../../middleware/auth.middleware");
router.use("/auth", authRoutes);
router.use("/tasks", authMiddleware, taskRoutes);
module.exports = router;
