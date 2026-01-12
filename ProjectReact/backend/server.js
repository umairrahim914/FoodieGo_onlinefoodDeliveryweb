const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(express.json())

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected")
}).catch((error) => {
    console.log(error)
})

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String
});

const User = mongoose.model("User", userSchema);

// Admin Schema
const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Admin = mongoose.model("Admin", adminSchema);

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    category: String
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
    res.send("FoodieGo Server is running")
})


// Create User
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// Get all Users
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Get User by ID
app.get("/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

// Update User
app.put("/users/:id", async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
});

// Delete User
app.delete("/users/:id", async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
});

// ==================== ADMIN ROUTES ====================

// Create Admin
app.post("/admin", async (req, res) => {
    try {
        const admin = new Admin(req.body);
        const savedAdmin = await admin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// Get all Admins
app.get("/admin", async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
});

// Get Admin by ID
app.get("/admin/:id", async (req, res) => {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
});

// Update Admin
app.put("/admin/:id", async (req, res) => {
    const updatedAdmin = await Admin.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updatedAdmin) {
        return res.status(404).json({ message: "Admin not found" });
    }
    res.json(updatedAdmin);
});

// Delete Admin
app.delete("/admin/:id", async (req, res) => {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) {
        return res.status(404).json({ message: "Admin not found" });
    }
    res.json({ message: "Admin deleted successfully" });
});


// Create Product
app.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// Get all Products
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get Product by ID
app.get("/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
});

// Update Product
app.put("/products/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
});

// Delete Product
app.delete("/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    
})