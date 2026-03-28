const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ===== CONNECT DATABASE =====
connectDB();

// ===== MIDDLEWARE =====
app.use(cors());            // allow frontend requests
app.use(express.json());    // parse JSON

// ===== ROUTES =====
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// ===== DEFAULT ROUTE (OPTIONAL BUT USEFUL) =====
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ===== START SERVER =====
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});