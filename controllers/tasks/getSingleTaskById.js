// const Task = require("../../models/Task");
// const { sendResponse, AppError } = require("../../helpers/utils");
// const TaskController = {};
// TaskController.getSingleTaskById = async (req, res, next) => {
//   const taskId = req.params.id;

//   try {
//     const task = await Task.findById(taskId);

//     if (!task) {
//       return next(new AppError(404, "Task not found", "Get Task Error"));
//     }

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { task: task } },
//       null,
//       "Task Found Successfully"
//     );
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };
// module.exports = TaskController;
