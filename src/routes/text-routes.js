import express from "express"
import {textController} from "../controllers/text-controllers.js"

const router = express.Router()

router.post('/',textController)

export default router