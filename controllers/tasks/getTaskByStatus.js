// const Task = require("../../models/Task");
// const { sendResponse, AppError } = require("../../helpers/utils");
// const TaskController = {};

// TaskController.getTaskByStatus = async (req, res, next) => {
//   const status = req.params.status;
//   if (!status || Object.keys(status).length === 0) {
//     throw new AppError(400, "No Status Provided", "Get Task Error");
//   }

//   try {
//     const tasks = await Task.find({ status: status }).sort({ createAt: -1 });

//     if (!tasks || tasks.length === 0) {
//       return next(
//         new AppError(404, "No tasks found with this status", "Get Task Error")
//       );
//     }

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { tasks: tasks } },
//       null,
//       "Get Tasks By Status Successfully"
//     );
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = TaskController;
