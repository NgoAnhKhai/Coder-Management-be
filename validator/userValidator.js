const Joi = require("joi");

const userValidator = Joi.object({
  name: Joi.string()
    .min(3)
    .max(255)
    .required()
    .regex(/^[A-Z][a-zA-Z]*$/)
    .messages({
      "string.base": "Name must be a string",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be less than 255 characters",
      "string.pattern.base":
        "Name must start with an uppercase letter and contain only letters",
      "any.required": "Name is required",
    }),
  role: Joi.string().valid("employee", "manager").default("employee").messages({
    "string.empty": "Role is required",
    "any.only": "Invalid role value",
  }),
});

module.exports = userValidator;
