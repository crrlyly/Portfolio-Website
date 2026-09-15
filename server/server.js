import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API is running!");
});

app.get("/db-test", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS test");
    res.json({
      connected: true,
      result: rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      connected: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
