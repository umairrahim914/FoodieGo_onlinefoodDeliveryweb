const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  // User who placed the order
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  // Order items array
  items: [{
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String
  }],
  
  // Delivery information
  deliveryInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
  },
  
  // Order totals
  totalAmount: { 
    type: Number, 
    required: true 
  },
  
  // Order status
  status: { 
    type: String, 
    enum: ['pending', 'preparing', 'delivered', 'cancelled'],
    default: 'pending' 
  },
  
  // Order date
  orderDate: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Order", orderSchema)
