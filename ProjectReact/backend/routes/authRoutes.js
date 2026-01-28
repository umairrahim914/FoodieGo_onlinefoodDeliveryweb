const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    
    const { firstName, lastName, username, email, password } = req.body

    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    })
    
    if (existingUser) {
      return res.status(400).json({ 
        message: "User with this email or username already exists" 
      })
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword  
    })

    const savedUser = await user.save()

    //jwt
    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }  
    )

    
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        username: savedUser.username,
        email: savedUser.email
      }
    })

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
})


router.post("/login", async (req, res) => {
  try {
   
    const { email, password } = req.body

    const user = await User.findOne({ 
      $or: [{ email }, { username: email }] 
    })

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" })
    }


    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }
    )

    
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        role: user.role  
      }
    })

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

router.post("/create-admin", async (req, res) => {
  try {
 
    const { firstName, lastName, username, email, password } = req.body
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    })
    
    if (existingUser) {
      return res.status(400).json({ 
        message: "User with this email or username already exists" 
      })
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const adminUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      role: 'admin'  
    })

    
    const savedAdmin = await adminUser.save()

    res.status(201).json({
      message: "Admin user created successfully",
      user: {
        id: savedAdmin._id,
        firstName: savedAdmin.firstName,
        lastName: savedAdmin.lastName,
        username: savedAdmin.username,
        email: savedAdmin.email,
        role: savedAdmin.role
      }
    })

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
})

module.exports = router
