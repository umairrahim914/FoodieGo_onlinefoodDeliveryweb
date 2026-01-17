const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  username: { 
    type: String, 
    required: true, 
    unique: true  // No duplicate usernames
  },
  email: { 
    type: String, 
    required: true, 
    unique: true  // No duplicate emails
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: String,  // Optional field
  role: { 
    type: String, 
    default: 'user'  // Default role is 'user', can be 'admin'
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
})

module.exports = mongoose.model("User", userSchema)
