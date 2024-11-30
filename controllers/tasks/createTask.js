// const Task = require("../../models/Task");
// const { sendResponse } = require("../../helpers/utils");
// //CREATE A TASK
// const TaskController = {};
// TaskController.createTask = async (req, res, next) => {
//   try {
//     const { taskName, description, status, userId } = req.body;

//     const newTask = await Task.create({
//       taskName,
//       description,
//       status,
//       user: userId,
//     });

//     sendResponse(
//       res,
//       200,
//       true,
//       { data: { task: newTask } },
//       null,
//       "Task Created Successfully"
//     );
//   } catch (err) {
//     next(err);
//   }
// };
// module.exports = TaskController;
