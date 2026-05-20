import { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetchProjects();

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
        }

      );

      setProjects(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 md:p-10 overflow-y-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-white mb-2">

            Projects

          </h1>

          <p className="text-slate-400 text-lg">

            Manage and monitor all project activities

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {
            projects.map((project) => (

              <div
                key={project._id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-2xl hover:scale-[1.02] hover:border-blue-500 transition-all duration-300"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-2xl font-bold text-white">

                    {project.title}

                  </h2>

                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>

                </div>

                <p className="text-slate-400 leading-7 min-h-[90px]">

                  {project.description}

                </p>

                <div className="mt-8 pt-5 border-t border-slate-800">

                  <p className="text-slate-500 text-sm mb-1">

                    Created By

                  </p>

                  <p className="text-white font-semibold">

                    {project.createdBy?.name}

                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default Projects;