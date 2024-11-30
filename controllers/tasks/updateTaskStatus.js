// const Task = require("../../models/Task");
// const { sendResponse, AppError } = require("../../helpers/utils");
// TaskController = {};
// TaskController.updateTaskStatus = async (req, res, next) => {
//   const { taskId, status } = req.body;
//   if (!taskId || !status) {
//     return next(
//       new AppError(
//         400,
//         "Task ID and status are required",
//         "Update Status Error"
//       )
//     );
//   }

//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       taskId,
//       { status: status },
//       { new: true }
//     );

//     if (!updatedTask) {
//       return next(new AppError(404, "Task not found", "Update Status Error"));
//     }

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { task: updatedTask } },
//       null,
//       "Task Status Updated Successfully"
//     );
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = TaskController;
