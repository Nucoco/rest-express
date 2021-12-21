const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getUsers);
router.post("/", users.createUser);
router.patch("/:userId", users.updateUser);
router.delete("/:userId", users.deleteUser);

module.exports = router;
// exports.default = router
