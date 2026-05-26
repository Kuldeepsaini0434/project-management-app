const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {

   createTask,

   getTasks,

   updateTaskStatus,

   deleteTask,

   getDashboard

} = require("../controllers/taskController");

router.post(

   "/",

   authMiddleware,

   roleMiddleware("Admin"),

   createTask

);

router.get(

   "/",

   authMiddleware,

   getTasks

);

router.put(

   "/:id",

   authMiddleware,

   updateTaskStatus

);

router.delete(

   "/:id",

   authMiddleware,

   deleteTask

);

router.get(

   "/dashboard/stats",

   authMiddleware,

   getDashboard

);

module.exports = router;