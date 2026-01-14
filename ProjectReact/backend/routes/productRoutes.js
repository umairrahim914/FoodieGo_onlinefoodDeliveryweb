const express = require("express")
const Product = require("../models/Product")

const router = express.Router()

router.post("/", async (req, res) => {
  const product = new Product(req.body)
  res.status(201).json(await product.save())
})

router.get("/", async (req, res) => {
  res.json(await Product.find())
})

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) return res.status(404).json({ message: "Product not found" })
  res.json(product)
})

router.put("/:id", async (req, res) => {
  res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.json({ message: "Product deleted" })
})

module.exports = router
