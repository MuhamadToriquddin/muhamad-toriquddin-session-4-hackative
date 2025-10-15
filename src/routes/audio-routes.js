import express from "express"
import { audioController } from "../controllers/audio-controllers.js"
import multer from "multer"

const router = express.Router()
const upload = multer()
router.post('/',upload.single("audio"),audioController)

export default router