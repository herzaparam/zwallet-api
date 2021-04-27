const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router
  .get("/find-all", auth.verification(), usersController.findAll)
  .get("/find-one", auth.verification(), usersController.findOne)
  .get("/get-one/:id", usersController.getOne)
  .get("/find-byid/:id", usersController.findId)
  .get("/auth/verify", usersController.verify)
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .post("/auth/login", usersController.login)
  .post("/auth/forgot-password", usersController.forgotPassword)
  .put("/insert-pin", auth.verification(), usersController.createPin)
  .put("/auth/reset-password", usersController.resetPassword)
  .put("/update-profile/:id", multer.uploadImage.single("image"), usersController.update)
  .put("/edit-password/:id", usersController.updatePassword)
  .put("/del/phonenumber", auth.verification(), usersController.deletePhone)
  .put("/insert/phonenumber", auth.verification(), usersController.insertPhone)
  .delete("/:id", auth.verification(), auth.isAdmin(), usersController.delete);

module.exports = router;
