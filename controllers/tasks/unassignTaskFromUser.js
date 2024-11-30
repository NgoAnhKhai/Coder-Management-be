// const Task = require("../../models/Task");
// const { sendResponse, AppError } = require("../../helpers/utils");
// const TaskController = {};
// TaskController.unassignTaskFromUser = async (req, res, next) => {
//   const { taskId } = req.body;
//   if (!taskId) {
//     return next(
//       new AppError(400, "Task ID is required", "Unassign Task Error")
//     );
//   }

//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       taskId,
//       { user: null },
//       { new: true }
//     );

//     if (!updatedTask) {
//       return next(new AppError(404, "Task not found", "Unassign Task Error"));
//     }

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { task: updatedTask } },
//       null,
//       "Task Unassigned Successfully"
//     );
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = TaskController;
