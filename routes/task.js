var express = require("express");
const {
  createTask,
  getTaskByStatus,
  assignTaskToUser,
  unassignTaskFromUser,
  getSingleTaskById,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/task.controllers");
const router = express.Router();
// Create Task
router.post("/create", createTask);

//Get Task By Status
router.get("/status/:status", getTaskByStatus);

// Get Task By Id
router.get("/:id", getSingleTaskById);

// Assign task to a user
router.put("/assign", assignTaskToUser);

// Unassign task from user
router.put("/unassign", unassignTaskFromUser);

//UpdateTaskToDone
router.put("/:id/status", updateTaskStatus);
//Delete
router.delete("/:id", deleteTask);

module.exports = router;
