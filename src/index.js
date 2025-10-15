
import express from "express"
import "dotenv/config"
import imageRoutes from "./routes/image-routes.js"
import textRoutes from "./routes/text-routes.js"
import docRoutes from "./routes/doc-routes.js"
import audioRoutes from "./routes/audio-routes.js"

const app = express()

app.use(express.json())

app.use("/generate-text",textRoutes)

app.use("/generate-from-image",imageRoutes)

app.use("/generate-from-document",docRoutes)

app.use("/generate-from-audio",audioRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server berjalan di port: ${process.env.PORT}`)
})