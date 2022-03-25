const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();

require("../database/db.js");
const User = require("../model/userSchema");

router.get("/about", (req, res) => {
    res.send("hello this is about");
  });

  router.post("/signup", async (req, res) => {
    let { name, email, password, cpassword } = req.body;
    if (!name || !email ||  !password || !cpassword) {
      return res.status(422).json({ error: "plz fill the data" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "password dont match" });
    }
    try {
      let data = new User({
        name,
        email,
        password,
        cpassword,
      });
      let Register = await data.save();
      if (Register) {
        res.status(200).json({
          success: true,
          message: "User registered Successfully",
          data: Register,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Something Went Wrong",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });
  
  module.exports = router;