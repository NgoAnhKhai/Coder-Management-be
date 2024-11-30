// validators/taskValidator.js
const Joi = require("joi");

const taskValidator = Joi.object({
  taskName: Joi.string().min(3).max(255).required().messages({
    "string.empty": "Task name is required",
    "string.min": "Task name must be at least 3 characters long",
    "string.max": "Task name can not be longer than 255 characters",
  }),
  description: Joi.string().min(5).max(500).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 5 characters long",
    "string.max": "Description can not be longer than 500 characters",
  }),
  status: Joi.string()
    .valid("Pending", "In working", "Completed", "review", "done", "archive")
    .required()
    .messages({
      "string.empty": "Status is required",
      "any.only": "Invalid status value",
    }),
  user: Joi.string().hex().length(24).optional().messages({
    "string.hex": "Invalid user ID format",
    "string.length": "User ID must be 24 characters long",
  }),
});

module.exports = taskValidator;
