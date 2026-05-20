import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function CreateTask() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [assignedTo, setAssignedTo] = useState("");

  const [project, setProject] = useState("");

  const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
    fetchUsers();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://project-management-backend-yhy6.onrender.com/api/projects",

        {
          headers: {
            Authorization: token,
          },
        },
      );

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://project-management-backend-yhy6.onrender.com/api/auth/users",

        {
          headers: {
            Authorization: token,
          },
        },
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://project-management-backend-yhy6.onrender.com/api/tasks",

        {
          title,
          description,
          project,
          dueDate,
          assignedTo,
        },

        {
          headers: {
            Authorization: token,
          },
        },
      );

      alert("Task Created Successfully");

      navigate("/tasks");
    } catch (error) {
      console.log(error);

      alert("Failed to create task");
    }
  };

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 md:p-10 flex justify-center items-start overflow-y-auto">
        <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-white mb-2">
              Create Task
            </h1>

            <p className="text-slate-400 text-lg">
              Assign and manage project tasks efficiently
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-300 mb-2 font-medium">
                Task Title
              </label>

              <input
                type="text"
                placeholder="Enter task title"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2 font-medium">
                Task Description
              </label>

              <textarea
                placeholder="Enter task description"
                rows="5"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2 font-medium">
                Select Project
              </label>

              <select
                className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setProject(e.target.value)}
              >
                <option value="">Select Project</option>

                {projects.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.title}
                  </option>
                ))}
              </select>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Assign To
                </label>

                <select
                  className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setAssignedTo(e.target.value)}
                >
                  <option value="">Select User</option>

                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-2 font-medium">
                Due Date
              </label>

              <input
                type="date"
                className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-4 rounded-2xl shadow-lg">
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
