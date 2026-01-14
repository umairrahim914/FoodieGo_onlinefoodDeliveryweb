const express = require("express")
const Admin = require("../models/Admin")

const router = express.Router()

router.post("/", async (req, res) => {
  const admin = new Admin(req.body)
  res.status(201).json(await admin.save())
})

router.get("/", async (req, res) => {
  res.json(await Admin.find())
})

router.get("/:id", async (req, res) => {
  const admin = await Admin.findById(req.params.id)
  res.json(admin)
})

router.put("/:id", async (req, res) => {
  res.json(await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

router.delete("/:id", async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id)
  res.json({ message: "Admin deleted" })
})

module.exports = router
