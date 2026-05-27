const express = require("express");
const sendResponse = require("../utils/responseHandler");
const router = express.Router();
router.get("/", (req, res) => {
  sendResponse(res, 200, "Server is running", {
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
