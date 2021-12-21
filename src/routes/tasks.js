const express = require("express");
const router = express.Router();
const tasks = require("../controllers/tasks");

router.get("/", tasks.getTasks);
router.post("/", tasks.createTask);
router.patch("/:taskId", tasks.updateTask);
router.delete("/:taskId", tasks.deleteTask);

module.exports = router;
// exports.default = router
