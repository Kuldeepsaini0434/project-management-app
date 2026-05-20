const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
   createTask,
   getTasks,
   updateTaskStatus,
   getDashboard
} = require("../controllers/taskController");

router.post("/", authMiddleware,roleMiddleware("Admin") ,createTask);

router.get("/", authMiddleware, getTasks);

router.put("/:id", authMiddleware, updateTaskStatus);

router.get("/dashboard/stats", authMiddleware, getDashboard);

module.exports = router;