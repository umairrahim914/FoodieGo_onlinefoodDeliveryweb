const express = require("express")
const User = require("../models/User")

const router = express.Router()

// Create User
router.post("/", async (req, res) => {
  const user = new User(req.body)
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// Get user by id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) return res.status(404).json({ message: "User not found" })
  res.json(user)
})

// Update user
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updatedUser)
})

// Delete user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: "User deleted" })
})

module.exports = router
