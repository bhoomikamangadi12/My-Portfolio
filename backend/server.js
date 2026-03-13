// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import projectRoutes from "./routes/projectRoute.js";
import projectRoutes from "./src/routes/projectRoute.js";
import sectionRoutes from "./src/routes/sectionRoute.js"

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/sections", sectionRoutes);

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
