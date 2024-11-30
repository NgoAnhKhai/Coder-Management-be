const Joi = require("joi");

const userValidator = Joi.object({
  name: Joi.string().min(3).max(255).required().messages({
    "string.empty": "User name is required",
    "string.min": "User name must be at least 3 characters long",
    "string.max": "User name can not be longer than 255 characters",
  }),
  role: Joi.string().valid("employee", "manager").default("employee").messages({
    "string.empty": "Role is required",
    "any.only": "Invalid role value",
  }),
});

module.exports = userValidator;
