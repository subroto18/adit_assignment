const express = require("express");
const { createUser } = require("../../controllers/auth.controller");
const validate = require("../../middleware/validate.middleware");
const { registerSchema } = require("../../validations/auth.validation");
const router = express.Router();
router.post("/register", validate(registerSchema), createUser);
// router.post("/login", login);
module.exports = router;
