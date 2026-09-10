import {getLanguages, getDesign, getFramework, getTools} from "../controllers/skillController.js"
import express from "express"

const router = express.Router()

router.get("/languages", getLanguages)
router.get("/designs", getDesign)
router.get("/frameworks", getFramework)
router.get("/tools", getTools)

export default router;