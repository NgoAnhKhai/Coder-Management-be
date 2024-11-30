const Joi = require("joi");

const validateId = Joi.string().length(24).hex().required().messages({
  "string.length": "ID must be a 24 character hex string",
  "string.hex": "ID must be a valid hex string",
  "any.required": "ID is required",
});

module.exports = { validateId };
