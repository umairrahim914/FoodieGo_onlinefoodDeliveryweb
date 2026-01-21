const express = require("express");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

const router = express.Router()

// MIDDLEWARE: Verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] // Get token from "Bearer TOKEN"
  
  if (!token) {
    return res.status(401).json({ message: "No token provided" })
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key")
    req.userId = decoded.userId // Add userId to request
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

// CREATE ORDER: Save order to database
router.post("/", verifyToken, async (req, res) => {
  try {
    const { items, deliveryInfo, totalAmount } = req.body
    
    // Create new order
    const order = new Order({
      userId: req.userId, // From token
      items,
      deliveryInfo,
      totalAmount,
      status: 'pending'
    })
    
    // Save to database
    const savedOrder = await order.save()
    
    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder
    })
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

// GET USER ORDERS: Get orders for logged-in user
router.get("/user", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId })
      .sort({ createdAt: -1 }) // Latest first
    
    res.json(orders)
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

// GET ALL ORDERS: For admin (get all orders from all users)
router.get("/admin", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate({
        path: 'userId',
        select: 'firstName lastName email role',
        // Don't fail if userId doesn't exist or can't be populated
        options: { strictPopulate: false }
      })
      .sort({ createdAt: -1 }) // Latest first
    
    res.json(orders)
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

// UPDATE ORDER STATUS: For admin
router.put("/:id/status", verifyToken, async (req, res) => {
  try {
    const { status } = req.body
    
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }
    
    res.json({ message: "Order status updated", order })
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
})

module.exports = router
