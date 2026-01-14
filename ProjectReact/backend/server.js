const express = require("express")
require("dotenv").config()

const connectDB = require("./config/db")

const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")
const productRoutes = require("./routes/productRoutes")

const app = express()
app.use(express.json())

connectDB()

app.get("/", (req, res) => {
  res.send("FoodieGo Server is running")
})

app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/products", productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
