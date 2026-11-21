
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PERN CRUD API is running!",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
