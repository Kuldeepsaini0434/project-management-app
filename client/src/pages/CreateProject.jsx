import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function CreateProject() {

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await axios.post(

        "http://localhost:5000/api/projects",

        {
          title,
          description,
        },

        {
          headers: {
            Authorization: token,
          },
        }

      );

      alert("Project Created Successfully");

      navigate("/projects");

    } catch (error) {

      console.log(error);

      alert("Failed to create project");

    }

  };

  return (

    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 md:p-10 flex justify-center items-start overflow-y-auto">

        <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">

          <div className="mb-10">

            <h1 className="text-4xl font-extrabold text-white mb-2">

              Create Project

            </h1>

            <p className="text-slate-400 text-lg">

              Organize and manage your project workflow

            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label className="block text-slate-300 mb-2 font-medium">

                Project Title

              </label>

              <input
                type="text"
                placeholder="Enter project title"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />

            </div>

            <div>

              <label className="block text-slate-300 mb-2 font-medium">

                Project Description

              </label>

              <textarea
                placeholder="Enter project description"
                rows="6"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-4 rounded-2xl shadow-lg"
            >

              Create Project

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default CreateProject;