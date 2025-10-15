import {ai} from "../config/ai.js"

export const textService = async({prompts})=>{
    const response = await ai.models.generateContent({
        model:process.env.GEMINI_MODEL,
        contents:prompts,
        
    })
    return response
}

