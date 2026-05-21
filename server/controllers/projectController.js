const Project = require("../models/Project");
const Task = require("../models/Task")
exports.createProject = async (req, res) => {
  try {
    const { title, description, teamMembers } = req.body;

    const project = await Project.create({
      title,
      description,
      teamMembers,

      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getProjects = async (req, res) => {
  try {
    let projects;

    if (req.user.role === "Admin") {
      projects = await Project.find().populate("createdBy", "name");
    } else {
      const tasks = await Task.find({
        assignedTo: req.user.id,
      });

      const projectIds = tasks.map((task) => task.project);

      projects = await Project.find({
        _id: { $in: projectIds },
      }).populate("createdBy", "name");
    }

    res.json(projects);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
