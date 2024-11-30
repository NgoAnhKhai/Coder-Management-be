var express = require("express");
const {
  createUser,
  getAllUser,
  updateUserByName,
  getAllTaskById,
} = require("../controllers/user.controllers");
const validationMiddleware = require("../middlewares/validation.middleware");
const userValidation = require("../validator/userValidator");
const router = express.Router();
//CREATE
router.post("/", validationMiddleware(userValidation, "body"), createUser);

//GET ALL USER
router.get("/", getAllUser);

//UPDATE USER BY NAME
router.put("/:name", updateUserByName);

//GET ALL TASK BY NAME
router.get("/task/:id", getAllTaskById);

module.exports = router;
