const { sendResponse, AppError } = require("../helpers/utils");
const Task = require("../models/Task");
const taskValidator = require("../validator/taskValidator");
const { validateId } = require("../validator/commonValidator");
const TaskController = {};

//CREATE A TASK
TaskController.createTask = async (req, res, next) => {
  try {
    const { error } = taskValidator.validate(req.body);
    if (error) {
      return next(
        new AppError(400, error.details[0].message, "Create Task Error")
      );
    }

    const { taskName, description, status, userId } = req.body;

    const newTask = await Task.create({
      taskName,
      description,
      status,
      user: userId,
    });

    sendResponse(
      res,
      200,
      true,
      { data: { task: newTask } },
      null,
      "Task Created Successfully"
    );
  } catch (err) {
    next(err);
  }
};

// GET TASK BY STATUS
TaskController.getTaskByStatus = async (req, res, next) => {
  const status = req.params.status;
  if (!status || Object.keys(status).length === 0) {
    throw new AppError(400, "No Status Provided", "Get Task Error");
  }

  try {
    const tasks = await Task.find({ status: status }).sort({ createAt: -1 });

    if (!tasks || tasks.length === 0) {
      return next(
        new AppError(404, "No tasks found with this status", "Get Task Error")
      );
    }

    sendResponse(
      res,
      200,
      true,
      { data: { tasks: tasks } },
      null,
      "Get Tasks By Status Successfully"
    );
  } catch (error) {
    next(error);
  }
};

// GET SINGLE TASK BY ID
TaskController.getSingleTaskById = async (req, res, next) => {
  const taskId = req.params.id;
  console.log("Task ID:", taskId);
  // Validate ID using Joi
  const { error } = validateId.validate(taskId);
  if (error) {
    return next(new AppError(400, error.details[0].message, "Get Task Error"));
  }

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return next(new AppError(404, "Task not found", "Get Task Error"));
    }

    sendResponse(
      res,
      200,
      true,
      { data: { task: task } },
      null,
      "Task Found Successfully"
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// ASSIGN OR UNASSIGN TASK FOR USER
TaskController.assignTaskToUser = async (req, res, next) => {
  const { taskId, userId } = req.body;
  if (!taskId || !userId) {
    return next(
      new AppError(400, "Task ID and User ID are required", "Assign Task Error")
    );
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { user: userId },
      { new: true }
    );

    if (!updatedTask) {
      return next(new AppError(404, "Task not found", "Assign Task Error"));
    }

    sendResponse(
      res,
      200,
      true,
      { data: { task: updatedTask } },
      null,
      "Task Assigned Successfully"
    );
  } catch (error) {
    next(error);
  }
};

// UNASSIGN TASK FROM USER
TaskController.unassignTaskFromUser = async (req, res, next) => {
  const { taskId } = req.body;
  if (!taskId) {
    return next(
      new AppError(400, "Task ID is required", "Unassign Task Error")
    );
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { user: null },
      { new: true }
    );

    if (!updatedTask) {
      return next(new AppError(404, "Task not found", "Unassign Task Error"));
    }

    sendResponse(
      res,
      200,
      true,
      { data: { task: updatedTask } },
      null,
      "Task Unassigned Successfully"
    );
  } catch (error) {
    next(error);
  }
};

// UPDATE THE STATUS OF TASK
TaskController.updateTaskStatus = async (req, res, next) => {
  const { taskId, status } = req.body;
  if (!taskId || !status) {
    return next(
      new AppError(
        400,
        "Task ID and status are required",
        "Update Status Error"
      )
    );
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status: status },
      { new: true }
    );

    if (!updatedTask) {
      return next(new AppError(404, "Task not found", "Update Status Error"));
    }

    sendResponse(
      res,
      200,
      true,
      { data: { task: updatedTask } },
      null,
      "Task Status Updated Successfully"
    );
  } catch (error) {
    next(error);
  }
};

// DELETE TASK
TaskController.deleteTask = async (req, res, next) => {
  const taskId = req.params.id;
  if (!taskId) {
    return next(new AppError(400, "Task ID is required", "Delete Task Error"));
  }

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return next(new AppError(404, "Task not found", "Delete Task Error"));
    }

    sendResponse(
      res,
      200,
      true,
      { data: { task: deletedTask } },
      null,
      "Task Deleted Successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = TaskController;
