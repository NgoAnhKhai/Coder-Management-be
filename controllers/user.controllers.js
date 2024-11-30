const { sendResponse, AppError } = require("../helpers/utils");
const Task = require("../models/Task");
const User = require("../models/User");
const userValidator = require("../validator/userValidator");
const { validateId } = require("../validator/commonValidator");
const userController = {};

//createUser

userController.createUser = async (req, res, next) => {
  try {
    const info = req.body;
    const { error } = userValidator.validate(req.body);
    if (error) {
      return next(
        new AppError(400, error.details[0].message, "Create User Error")
      );
    }
    const created = await User.create(info);
    sendResponse(
      res,
      200,
      true,
      { data: { user: created } },
      null,
      "Create Successfully"
    );
  } catch (err) {
    next(err);
  }
};

//GetAlluser

userController.getAllUser = async (req, res, next) => {
  const filter = {};
  try {
    const users = await User.find(filter);
    sendResponse(res, 200, true, { user: users }, null, "Found List Of User");
  } catch (err) {
    next(err);
  }
};

//UpdateUser

userController.updateUserByName = async (req, res, next) => {
  const filter = { name: req.params.name };
  const updateInfo = "";
  const option = { new: true };
  try {
    const user = await User.findOneAndUpdate(filter, updateInfo, option);
    sendResponse(
      res,
      200,
      true,
      { data: { user: user } },
      null,
      "Update User Successfully"
    );
  } catch (err) {
    next(err);
  }
};

//getalltaskbyid

userController.getAllTaskById = async (req, res, next) => {
  const userId = req.params.id;
  // Validate ID using Joi
  const { error } = validateId.validate(userId);
  if (error) {
    return next(new AppError(400, error.details[0].message, " Error"));
  }
  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new AppError(
        404,
        `User with name ${userId} not found`,
        "not found"
      );
    }
    const tasks = await Task.find({ user: userId });
    if (tasks.length === 0) {
      return sendResponse(
        res,
        200,
        false,
        null,
        null,
        "No tasks found for this user"
      );
    }
    sendResponse(
      res,
      200,
      true,
      { tasks },
      null,
      "Found tasks for user successfully"
    );
  } catch (err) {
    next(err);
  }
};
module.exports = userController;
