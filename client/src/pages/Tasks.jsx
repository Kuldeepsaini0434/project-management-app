import { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(

        "http://localhost:5000/api/tasks",

        {
          headers: {
            Authorization: token,
          },
        }

      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      const token = localStorage.getItem("token");

      await axios.put(

        `http://localhost:5000/api/tasks/${id}`,

        {
          status,
        },

        {
          headers: {
            Authorization: token,
          },
        }

      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = statusFilter
      ? task.status === statusFilter
      : true;

    return matchesSearch && matchesStatus;

  });

  return (

    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 md:p-10 overflow-y-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-white mb-2">

            Tasks

          </h1>

          <p className="text-slate-400 text-lg">

            Manage project tasks and track progress

          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-slate-900 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 w-full md:w-80"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="bg-slate-900 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            onChange={(e) => setStatusFilter(e.target.value)}
          >

            <option value="">
              All Status
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {
            filteredTasks.map((task) => (

              <div
                key={task._id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-2xl hover:scale-[1.02] hover:border-blue-500 transition-all duration-300"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-2xl font-bold text-white">

                    {task.title}

                  </h2>

                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>

                </div>

                <p className="text-slate-400 leading-7 mb-6 min-h-[90px]">

                  {task.description}

                </p>

                <div className="space-y-3">

                  <div>

                    <p className="text-slate-500 text-sm mb-1">

                      Project

                    </p>

                    <p className="text-white font-medium">

                      {task.project?.title}

                    </p>

                  </div>

                  <div>

                    <p className="text-slate-500 text-sm mb-1">

                      Assigned To

                    </p>

                    <p className="text-white font-medium">

                      {task.assignedTo?.name}

                    </p>

                  </div>

                </div>

                <div className="mt-8">

                  <p className="text-slate-500 text-sm mb-2">

                    Task Status

                  </p>

                  <select
                    value={task.status}
                    onChange={(e) =>
                      updateStatus(task._id, e.target.value)
                    }
                    className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  >

                    <option>
                      Pending
                    </option>

                    <option>
                      In Progress
                    </option>

                    <option>
                      Completed
                    </option>

                  </select>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default Tasks;