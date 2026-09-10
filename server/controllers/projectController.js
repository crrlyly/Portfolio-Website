import db from "../config/db.js";

async function getCSProjects(req, res) {
  try {
    const [rows] = await db.query("SELECT * from projects where type = 'CS' ");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching CS projects:", error);
    res.status(500).json({ message: "CS Projects not found" });
  }
}

async function getUIUXProjects(req, res) {
  try {
    const [rows] = await db.query("SELECT * from projects where type = 'UIUX' ");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching UIUX projects:", error);
    res.status(500).json({ message: "UIUX Projects not found" });
  }
}

export { getCSProjects, getUIUXProjects };
