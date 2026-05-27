const { z } = require("zod");
const { TASK_STATUS } = require("../constants/enums");

const createTaskSchema = z.object({
  title: z.string().trim().min(1).max(150),
  description: z.string().trim().max(1000).optional(),
  status: z.enum(Object.values(TASK_STATUS)).optional(),
});

module.exports = {
  createTaskSchema,
};
