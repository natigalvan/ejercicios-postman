const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/userController");
const UserInstance = new UserController();

router.get("/", function (req, res, next) {
  UserInstance.getUser(req, res);
});

router.post("/add", function (req, res, next) {
  UserInstance.postUser(req, res);
});

router.put("/modify", function (req, res, next) {
  UserInstance.modifyUser(req, res);
});

router.delete("/delete/:indice", function (req, res, next) {
  UserInstance.deleteUser(req, res);
});

module.exports = router;
