import express from "express"
import { imageController } from "../controllers/image-controllers.js"
import multer from "multer"

const router = express.Router()
const upload = multer()
router.post('/',upload.single("image"),imageController)

export default router