// const Task = require("../../models/Task");
// const { sendResponse, AppError } = require("../../helpers/utils");
// const TaskController = {};
// TaskController.assignTaskToUser = async (req, res, next) => {
//   const { taskId, userId } = req.body;
//   if (!taskId || !userId) {
//     return next(
//       new AppError(400, "Task ID and User ID are required", "Assign Task Error")
//     );
//   }

//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       taskId,
//       { user: userId },
//       { new: true }
//     );

//     if (!updatedTask) {
//       return next(new AppError(404, "Task not found", "Assign Task Error"));
//     }

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { task: updatedTask } },
//       null,
//       "Task Assigned Successfully"
//     );
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = TaskController;
