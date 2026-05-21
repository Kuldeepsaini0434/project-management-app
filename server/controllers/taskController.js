const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, project, assignedTo, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      project,
      assignedTo,
      dueDate,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "Admin") {
      tasks = await Task.find()
        .populate("project")
        .populate("assignedTo", "name email");
    } else {
      tasks = await Task.find({
        assignedTo: req.user.id,
      })
        .populate("project")
        .populate("assignedTo", "name email");
    }

    res.json(tasks);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,

      { status },

      { new: true },
    );

    res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments();

    const pendingTasks = await Task.countDocuments({
      status: "Pending",
    });

    const completedTasks = await Task.countDocuments({
      status: "Completed",
    });

    const inProgressTasks = await Task.countDocuments({
      status: "In Progress",
    });

    const overdueTasks = await Task.countDocuments({
      dueDate: {
        $lt: new Date(),
      },

      status: {
        $ne: "Completed",
      },
    });

    res.status(200).json({
      totalTasks,
      pendingTasks,
      completedTasks,
      inProgressTasks,
      overdueTasks,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
