const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const Products = require("../models/profile.model")

require("dotenv").config()

const router = express.Router();

router.post("/addprofile", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        
       
            let profile = await Products.create(req.body)
            return res.send(profile)
        
      
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.get("/getallprofile", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        
       
            let profile = await Profile.find()
            return res.send(profile)
       
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.patch("/update/:id", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        
        
            const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new : true,}).lean().exec()  
            return res.send(profile)
      
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})


module.exports = router