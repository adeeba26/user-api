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
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

