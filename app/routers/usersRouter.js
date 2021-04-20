const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router
  .get("/find-all", usersController.findAll)
  .get("/find-one", auth.verification(), usersController.findOne)
  .get("/find-byid/:id", usersController.findId)
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .get("/auth/verify", usersController.verify)
  .post("/auth/login", usersController.login)
  .post("/auth/forgot-password", usersController.forgotPassword)
  .put("/auth/reset-password", usersController.resetPassword)
  .put("/:id", multer.uploadImage.single("image"), usersController.update)
  .put("/edit-password/:id", usersController.updatePassword)
  .delete("/:id", auth.verification(), auth.isAdmin(), usersController.delete);

module.exports = router;
