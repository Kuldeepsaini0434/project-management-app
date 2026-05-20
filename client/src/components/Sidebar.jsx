import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  PlusCircle,
  LogOut,
} from "lucide-react";

function Sidebar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/");

  };

  return (

    <div className="w-72 min-h-screen bg-slate-950 text-white flex flex-col px-6 py-8 shadow-2xl border-r border-slate-800">

      <h1 className="text-4xl font-extrabold text-blue-400 mb-12 tracking-wide">

        ProjectPro

      </h1>

      <nav className="flex flex-col gap-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 text-slate-200 hover:text-white shadow-md"
        >

          <LayoutDashboard size={22} />

          <span className="text-lg font-medium">
            Dashboard
          </span>

        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 text-slate-200 hover:text-white shadow-md"
        >

          <FolderKanban size={22} />

          <span className="text-lg font-medium">
            Projects
          </span>

        </Link>

        {
          role === "Admin" && (

            <Link
              to="/create-project"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 text-slate-200 hover:text-white shadow-md"
            >

              <PlusCircle size={22} />

              <span className="text-lg font-medium">
                Create Project
              </span>

            </Link>

          )
        }

        <Link
          to="/tasks"
          className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 text-slate-200 hover:text-white shadow-md"
        >

          <CheckSquare size={22} />

          <span className="text-lg font-medium">
            Tasks
          </span>

        </Link>

        {
          role === "Admin" && (

            <Link
              to="/create-task"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 text-slate-200 hover:text-white shadow-md"
            >

              <PlusCircle size={22} />

              <span className="text-lg font-medium">
                Create Task
              </span>

            </Link>

          )
        }

      </nav>

      <button
        onClick={logout}
        className="mt-auto flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white py-4 rounded-2xl font-bold shadow-lg"
      >

        <LogOut size={20} />

        Logout

      </button>

    </div>

  );

}

export default Sidebar;