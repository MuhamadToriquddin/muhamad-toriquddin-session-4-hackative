import { imageService } from "../services/image-services.js";

export const imageController = async(req,res)=>{
    try {
        const {prompts} = req.body
        const image = req.file.buffer.toString("base64")
        if (!prompts || typeof prompts != "string" || !image){
            res.status(400).json({status:"failed",message:"Data tidak valid, isi prompt dan gambar"})
        }
        const mimeType = req.file.mimetype
        const response = await imageService({prompts,image,mimeType})
        res.status(200).json({
            result:response.text,
            status:"success",
            message:"Gemini berhasil merespon"
        })
    } catch (e) {
       console.log(e)
       res.status(500).json({
        message:(e.message,"Server bermasalah silahkan coba lagi beberapa saat lagi"), 
        status:"failed",
    }) 
    }
}