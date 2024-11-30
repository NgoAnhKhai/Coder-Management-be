// // DELETE TASK

// const { sendResponse, AppError } = require("../../helpers/utils");
// const Task = require("../../models/Task");

// const TaskController = {};
// TaskController.deleteTask = async (req, res, next) => {
//   const taskId = req.params.id;
//   if (!taskId) {
//     return next(new AppError(400, "Task ID is required", "Delete Task Error"));
//   }

//   try {
//     const deletedTask = await Task.findByIdAndDelete(taskId);

//     if (!deletedTask) {
//       return next(new AppError(404, "Task not found", "Delete Task Error"));
//     }

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { task: deletedTask } },
//       null,
//       "Task Deleted Successfully"
//     );
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = TaskController;
