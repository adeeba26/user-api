require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// VERY IMPORTANT
app.use(express.json());

// ROUTES (path must match exactly)
app.use("/api/users", require("./routes/userRoutes"));

// test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started");
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

