const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router()

// REGISTER ROUTE: Creates new user account
router.post("/register", async (req, res) => {
  try {
    // EXTRACT: Data from request body
    const { firstName, lastName, username, email, password } = req.body

    // CHECK: If user already exists with same email or username
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    })
    
    if (existingUser) {
      return res.status(400).json({ 
        message: "User with this email or username already exists" 
      })
    }

    // ENCRYPT: Password before saving (security)
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // CREATE: New user object
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword  // Store encrypted password
    })

    // SAVE: User to MongoDB database
    const savedUser = await user.save()

    // CREATE: JWT token for authentication
    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }  // Token expires in 24 hours
    )

    // SEND: Success response (don't send password back)
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

// LOGIN ROUTE: Authenticates existing user
router.post("/login", async (req, res) => {
  try {
    // EXTRACT: Login credentials
    const { email, password } = req.body

    // FIND: User by email or username
    const user = await User.findOne({ 
      $or: [{ email }, { username: email }] 
    })

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // VERIFY: Password matches stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password)
    
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // CREATE: JWT token for authenticated user
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }
    )

    // SEND: Success response with token
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
      }
    })

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

module.exports = router
