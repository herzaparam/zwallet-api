const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const auth = require("../middlewares/auth");


router
    .put("/transfer", transactionController.transfer);

    module.exports = router;