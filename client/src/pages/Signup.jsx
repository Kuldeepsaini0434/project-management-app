import { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function Signup(){

   const [name,setName] = useState("");

   const [email,setEmail] = useState("");

   const [password,setPassword] = useState("");

   const [role,setRole] = useState("Member");

   const navigate = useNavigate();

   const handleSignup = async (e)=>{

      e.preventDefault();

      try{

         await axios.post(

            "https://project-management-backend-yhy6.onrender.com/api/auth/signup",

            {
               name,
               email,
               password,
               role
            }

         );

         alert("Signup Successful");

         navigate("/");

      }catch(error){

         console.log(error);

         alert("Signup Failed");

      }

   }

   return(

      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600">

         <form
            onSubmit={handleSignup}
            className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96 border border-white/30"
         >

            <h1 className="text-4xl font-bold text-white text-center mb-8">

               Create Account

            </h1>

            <input
               type="text"
               placeholder="Full Name"
               className="w-full p-3 rounded-lg mb-4 bg-white/30 text-white placeholder-white outline-none"
               onChange={(e)=>setName(e.target.value)}
            />

            <input
               type="email"
               placeholder="Email"
               className="w-full p-3 rounded-lg mb-4 bg-white/30 text-white placeholder-white outline-none"
               onChange={(e)=>setEmail(e.target.value)}
            />

            <input
               type="password"
               placeholder="Password"
               className="w-full p-3 rounded-lg mb-4 bg-white/30 text-white placeholder-white outline-none"
               onChange={(e)=>setPassword(e.target.value)}
            />

            <select
               className="w-full p-3 rounded-lg mb-6 bg-white/30 text-white outline-none"
               onChange={(e)=>setRole(e.target.value)}
            >

               <option className="text-black">
                  Member
               </option>

               <option className="text-black">
                  Admin
               </option>

            </select>

            <button
               className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-200 transition"
            >

               Signup

            </button>

            <p className="text-white text-center mt-6">

               Already have an account?

               <Link
                  to="/"
                  className="font-bold ml-2"
               >
                  Login
               </Link>

            </p>

         </form>

      </div>

   )

}

export default Signup;