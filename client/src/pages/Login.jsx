import { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/login",

        {
          email,
          password,
        }

      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "role",
        response.data.user.role
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-700 shadow-2xl rounded-3xl p-10"
      >

        <h1 className="text-4xl font-extrabold text-white text-center mb-3">

          Welcome Back

        </h1>

        <p className="text-slate-400 text-center mb-8">

          Login to manage your projects

        </p>

        <div className="mb-5">

          <label className="block text-slate-300 mb-2 font-medium">

            Email

          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="mb-6">

          <label className="block text-slate-300 mb-2 font-medium">

            Password

          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 p-4 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg"
        >

          Login

        </button>

        <p className="text-slate-400 text-center mt-8">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-semibold ml-2"
          >

            Signup

          </Link>

        </p>

      </form>

    </div>

  );

}

export default Login;