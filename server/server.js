const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5001; // Changed port to 5001

app.use(cors());
app.use(bodyParser.json());

// Middleware

// Routes
app.use("/api/users", userRoutes);

mongoose
  .connect(
    "mongodb+srv://petterdalen1:W6qqveh2xf27whlq@cluster0.vaptcbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
