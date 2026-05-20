import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(

        "https://project-management-backend-yhy6.onrender.com/api/tasks/dashboard/stats",

        {
          headers: {
            Authorization: token,
          },
        }

      );

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const chartData = [

    {
      name: "Pending",
      tasks: stats.pendingTasks || 0,
    },

    {
      name: "Completed",
      tasks: stats.completedTasks || 0,
    },

    {
      name: "In Progress",
      tasks: stats.inProgressTasks || 0,
    },

  ];

  return (

    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 md:p-10 overflow-y-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-white mb-2">

            Dashboard

          </h1>

          <p className="text-slate-400 text-lg">

            Monitor your projects and task performance

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <h2 className="text-lg text-blue-100 font-medium">

              Total Tasks

            </h2>

            <p className="text-5xl font-bold text-white mt-4">

              {stats.totalTasks || 0}

            </p>

          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <h2 className="text-lg text-emerald-100 font-medium">

              Completed

            </h2>

            <p className="text-5xl font-bold text-white mt-4">

              {stats.completedTasks || 0}

            </p>

          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <h2 className="text-lg text-orange-100 font-medium">

              Pending

            </h2>

            <p className="text-5xl font-bold text-white mt-4">

              {stats.pendingTasks || 0}

            </p>

          </div>

          <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <h2 className="text-lg text-rose-100 font-medium">

              Overdue

            </h2>

            <p className="text-5xl font-bold text-white mt-4">

              {stats.overdueTasks || 0}

            </p>

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl mt-10">

          <div className="mb-6">

            <h2 className="text-3xl font-bold text-white mb-2">

              Task Analytics

            </h2>

            <p className="text-slate-400">

              Visual overview of project progress

            </p>

          </div>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={chartData}>

              <XAxis
                dataKey="name"
                stroke="#94A3B8"
              />

              <YAxis stroke="#94A3B8" />

              <Tooltip />

              <Bar
                dataKey="tasks"
                fill="#3B82F6"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;