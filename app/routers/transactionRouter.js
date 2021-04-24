const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const auth = require("../middlewares/auth");


router
    .get("/history", auth.verification(),transactionController.getHistory)
    .post("/history", transactionController.history)
    .put("/transfer", transactionController.transfer);

module.exports = router;