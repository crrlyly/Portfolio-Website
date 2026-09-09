import express from "express"
import {
    getCSProjects,
    getUIUXProjects,
} from "../controllers/projectController.js"

const router = express.Router()

router.get("/CS", getCSProjects)
router.get("/UIUX", getUIUXProjects)

export default router;