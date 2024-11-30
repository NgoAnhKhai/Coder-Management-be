const Joi = require("joi");

const validateId = Joi.string().length(24).hex().required().messages({
  "string.base": "ID must be a string",
  "string.hex": "ID must be a valid hexadecimal string",
  "string.length": "ID must be 24 characters long",
  "any.required": "ID is required",
});

module.exports = { validateId };
