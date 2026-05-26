const roleMiddleware = require("../middleware/roleMiddleware");
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
   createProject,
   getProjects,
   deleteProject
} = require("../controllers/projectController");

router.post("/", authMiddleware, roleMiddleware("Admin"),createProject);

router.get("/", authMiddleware, getProjects);

router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;