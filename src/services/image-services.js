import {ai} from "../config/ai.js"

export const imageService = async({prompts, image, mimeType})=>{
    const response = await ai.models.generateContent({
        model:process.env.GEMINI_MODEL,
        contents:[
            {text:prompts,type:"text"},
            {inlineData:{data:image,mimeType:mimeType}}
        ]
        
    })
    return response
}

