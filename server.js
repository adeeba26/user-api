require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

/* ---------- Middleware ---------- */
app.use(express.json());

/* ---------- Routes ---------- */
app.use("/api/users", require("./routes/userRoutes"));

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

/* ---------- MongoDB Connection ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
