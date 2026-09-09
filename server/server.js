import express from "express";
import "dotenv/config";

import projectRoutes from "./routes/projectRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
