import express from "express"
import { docController } from "../controllers/doc-controllers.js"
import multer from "multer"

const router = express.Router()
const upload = multer()
router.post('/',upload.single("doc"),docController)

export default router