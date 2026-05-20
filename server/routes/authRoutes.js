const express = require("express");

const User = require("../models/User");

const router = express.Router();

const {
   signup,
   login
} = require("../controllers/authController");

router.post("/signup", signup);

router.post("/login", login);

router.get("/users", async (req,res)=>{

   try{

      const users = await User.find()
      .select("-password");

      res.status(200).json(users);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

});

module.exports = router;