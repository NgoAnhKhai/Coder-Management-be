const { sendResponse, AppError } = require("../helpers/utils");
var express = require("express");
var router = express.Router();

router.get("/template/:test", async (req, res, next) => {
  const { test } = req.params;
  try {
    //turn on to test error handling
    if (test === "error") {
      throw new AppError(401, "Access denied", "Authentication Error");
    } else {
      sendResponse(
        res,
        200,
        true,
        { data: "template" },
        null,
        "template success"
      );
    }
  } catch (err) {
    next(err);
  }
});
// User
const users = require("./users");
router.use("/user", users);

const task = require("./task");
router.use("/task", task);

module.exports = router;
