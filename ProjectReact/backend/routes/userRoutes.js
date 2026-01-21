const express = require("express")
const User = require("../models/User")

const router = express.Router()

// Create User
router.post("/", async (req, res) => {
  const user = new User(req.body)
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

// Get all users (exclude admin users)
router.get("/", async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: 'admin' } }) // Exclude admin users
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

// Get all users including admins (for admin dashboard)
router.get("/all", async (req, res) => {
  try {
    const users = await User.find() // Get all users including admins
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
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
// DELETE USER (with basic validation)
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router