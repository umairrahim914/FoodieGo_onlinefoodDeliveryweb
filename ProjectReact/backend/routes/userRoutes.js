const express = require("express")
const User = require("../models/User")

const router = express.Router()

router.post("/", async (req, res) => {
  const user = new User(req.body)
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

router.get("/", async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: 'admin' } }) 
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

router.get("/all", async (req, res) => {
  try {
    const users = await User.find() 
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) return res.status(404).json({ message: "User not found" })
  res.json(user)
})

router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updatedUser)
})


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