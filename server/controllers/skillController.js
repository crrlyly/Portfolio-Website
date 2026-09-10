import db from "../config/db.js";

async function getLanguages(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * from skills where skillType = 'languages' ",
    );
    res.json(rows);
  } catch (error) {
    console.error("Failed to get languages: ", error);
    res.status(500).json({ message: "Language not found" });
  }
}
async function getFramework(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * from skills where skillType = 'framework' ",
    );
    res.json(rows);
  } catch (error) {
    console.error("Failed to get framework: ", error);
    res.status(500).json({ message: "framework not found" });
  }
}
async function getDesign(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * from skills where skillType = 'design' ",
    );
    res.json(rows);
  } catch (error) {
    console.error("Failed to get design: ", error);
    res.status(500).json({ message: "design not found" });
  }
}
async function getTools(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * from skills where skillType = 'tools' ",
    );
    res.json(rows);
  } catch (error) {
    console.error("Failed to get tools: ", error);
    res.status(500).json({ message: "tools not found" });
  }
}

export { getLanguages, getFramework, getDesign, getTools };
