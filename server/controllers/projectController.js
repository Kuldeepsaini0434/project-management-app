const Project = require("../models/Project");

exports.createProject = async (req,res)=>{

   try{

      const {title,description,teamMembers} = req.body;

      const project = await Project.create({

         title,
         description,
         teamMembers,

         createdBy:req.user.id

      });

      res.status(201).json({
         message:"Project created successfully",
         project
      });

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

};

exports.getProjects = async (req,res)=>{

   try{

      const projects = await Project.find()
      .populate("createdBy","name email")
      .populate("teamMembers","name email");

      res.status(200).json(projects);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

};