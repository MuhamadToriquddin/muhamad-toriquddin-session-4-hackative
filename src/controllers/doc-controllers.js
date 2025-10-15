import { docService } from "../services/doc-services.js"

export const docController = async(req,res)=>{
    try {
        const {prompts} = req.body
        const doc = req.file.buffer.toString("base64")
        if (!prompts || typeof prompts != "string" || !doc){
            res.status(400).json({status:"failed",message:"Data tidak valid, isi prompt dan dokumen"})
        }
        const mimeType = req.file.mimetype
        const response = await docService({prompts,doc,mimeType})
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