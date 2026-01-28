const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  items: [{
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String
  }],
 
  deliveryInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
  },
 
  totalAmount: { 
    type: Number, 
    required: true 
  },
  
  status: { 
    type: String, 
    enum: ['pending', 'preparing', 'delivered', 'cancelled'],
    default: 'pending' 
  },
  
  orderDate: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Order", orderSchema)
