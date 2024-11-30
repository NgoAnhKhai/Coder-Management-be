const Joi = require("joi");

const taskValidator = Joi.object({
  taskName: Joi.string().min(3).max(100).required().messages({
    "string.base": "Task name must be a string",
    "string.empty": "Task name is required",
    "string.min": "Task name must be at least 3 characters long",
    "string.max": "Task name must not exceed 100 characters",
    "any.required": "Task name is a required field",
  }),
  description: Joi.string().min(5).max(500).required().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min": "Description must be at least 5 characters long",
    "string.max": "Description must not exceed 500 characters",
    "any.required": "Description is a required field",
  }),
  status: Joi.string()
    .valid("Pending", "In Progress", "Completed")
    .default("Pending")
    .messages({
      "string.base": "Status must be a string",
      "any.only": "Status must be one of: Pending, In Progress, Completed",
    }),
  userId: Joi.string().required().messages({
    "string.base": "User ID must be a string",
    "any.required": "User ID is required",
  }),
});

module.exports = taskValidator;
