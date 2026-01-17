const express = require("express")
const cors = require("cors")  //For frontend communication
require("dotenv").config()

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");  // Auth routes

const app = express();

// middleware. Parse JSON and enable CORS
app.use(express.json());
app.use(cors());  // Allows frontend to make requests

connectDB();

//  Test if server is running
app.get("/", (req, res) => {
  res.send("FoodieGo Server is running");
})

app.use("/users", userRoutes);     
app.use("/admin", adminRoutes);     
app.use("/products", productRoutes); 
app.use("/auth", authRoutes);       // Authentication (login/register)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
